'use client'

import { useEffect, useRef, useState } from 'react'
import { createChart, IChartApi, ISeriesApi, CandlestickData, UTCTimestamp } from 'lightweight-charts'

interface TradingChartProps {
  symbol?: string
}

// Popular meme coins from pump.fun and Solana ecosystem
const MEME_COINS = [
  { symbol: 'SOL/USD', name: 'Solana', basePrice: 150, volatility: 0.02 },
  { symbol: 'BONK/USD', name: 'Bonk', basePrice: 0.000015, volatility: 0.05 },
  { symbol: 'WIF/USD', name: 'dogwifhat', basePrice: 2.5, volatility: 0.04 },
  { symbol: 'MYRO/USD', name: 'Myro', basePrice: 0.15, volatility: 0.06 },
  { symbol: 'POPCAT/USD', name: 'Popcat', basePrice: 0.85, volatility: 0.05 },
  { symbol: 'WEN/USD', name: 'Wen', basePrice: 0.0001, volatility: 0.07 },
  { symbol: 'ANALOS/USD', name: 'Analos', basePrice: 0.02, volatility: 0.08 },
  { symbol: 'PONKE/USD', name: 'Ponke', basePrice: 0.45, volatility: 0.06 },
]

export default function TradingChart({ symbol = 'SOL/USD' }: TradingChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
  const [selectedCoin, setSelectedCoin] = useState(symbol)
  const [currentPrice, setCurrentPrice] = useState(0)
  const [priceChange, setPriceChange] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const lastPriceRef = useRef(0)

  useEffect(() => {
    if (!chartContainerRef.current) return

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: 'transparent' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: 'rgba(30, 36, 51, 0.5)' },
        horzLines: { color: 'rgba(30, 36, 51, 0.5)' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: '#1e2433',
      },
      rightPriceScale: {
        borderColor: '#1e2433',
      },
      crosshair: {
        mode: 1,
        vertLine: {
          color: '#00d4aa',
          width: 1,
          style: 3,
        },
        horzLine: {
          color: '#00d4aa',
          width: 1,
          style: 3,
        },
      },
    })

    chartRef.current = chart

    // Create candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00d4aa',
      downColor: '#ff4757',
      borderUpColor: '#00d4aa',
      borderDownColor: '#ff4757',
      wickUpColor: '#00d4aa',
      wickDownColor: '#ff4757',
    })

    seriesRef.current = candlestickSeries

    // Find selected coin data
    const coinData = MEME_COINS.find(c => c.symbol === selectedCoin) || MEME_COINS[0]

    // Generate realistic historical data
    const generateData = () => {
      const data: CandlestickData[] = []
      let currentPrice = coinData.basePrice
      const now = Math.floor(Date.now() / 1000)
      const volatility = coinData.volatility

      // Generate 200 candles of historical data
      for (let i = 200; i >= 0; i--) {
        const timestamp = (now - i * 60) as UTCTimestamp
        
        // Add some trend and randomness
        const trend = Math.sin(i / 20) * volatility * currentPrice
        const random = (Math.random() - 0.5) * 2 * volatility * currentPrice
        currentPrice += trend + random
        
        // Ensure price doesn't go negative
        currentPrice = Math.max(currentPrice, coinData.basePrice * 0.5)

        const open = currentPrice
        const closeChange = (Math.random() - 0.5) * volatility * currentPrice
        const close = open + closeChange
        const high = Math.max(open, close) + Math.random() * volatility * currentPrice * 0.5
        const low = Math.min(open, close) - Math.random() * volatility * currentPrice * 0.5

        data.push({
          time: timestamp,
          open,
          high,
          low,
          close,
        })

        currentPrice = close
      }

      return data
    }

    const historicalData = generateData()
    candlestickSeries.setData(historicalData)
    
    // Set initial price
    const lastCandle = historicalData[historicalData.length - 1]
    setCurrentPrice(lastCandle.close)
    lastPriceRef.current = lastCandle.close
    
    // Calculate 24h change (compare with 24h ago - ~1440 candles for 1min timeframe)
    const dayAgoPrice = historicalData[Math.max(0, historicalData.length - 100)]?.close || lastCandle.close
    const change = ((lastCandle.close - dayAgoPrice) / dayAgoPrice) * 100
    setPriceChange(change)

    // Update data in real-time with live feel
    const interval = setInterval(() => {
      const lastBar = historicalData[historicalData.length - 1]
      const coinData = MEME_COINS.find(c => c.symbol === selectedCoin) || MEME_COINS[0]
      
      // Simulate live price movement
      const priceChange = (Math.random() - 0.48) * coinData.volatility * lastBar.close // Slight upward bias
      let newClose = lastBar.close + priceChange
      
      // Ensure price stays reasonable
      newClose = Math.max(newClose, coinData.basePrice * 0.5)
      newClose = Math.min(newClose, coinData.basePrice * 2)
      
      const newHigh = Math.max(lastBar.close, newClose, lastBar.high)
      const newLow = Math.min(lastBar.close, newClose, lastBar.low)
      
      const newBar = {
        time: Math.floor(Date.now() / 1000) as UTCTimestamp,
        open: lastBar.close,
        high: newHigh,
        low: newLow,
        close: newClose,
      }
      
      candlestickSeries.update(newBar)
      historicalData.push(newBar)
      
      // Update price display with animation
      setCurrentPrice(newClose)
      
      // Calculate change from last update
      if (lastPriceRef.current) {
        const change = ((newClose - lastPriceRef.current) / lastPriceRef.current) * 100
        setPriceChange(change)
      }
      lastPriceRef.current = newClose
      
      // Keep only last 200 candles for performance
      if (historicalData.length > 200) {
        historicalData.shift()
      }
    }, 2000) // Update every 2 seconds for live feel

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [selectedCoin])

  const handleCoinChange = (newSymbol: string) => {
    setIsLoading(true)
    setSelectedCoin(newSymbol)
    setTimeout(() => setIsLoading(false), 500)
  }

  const formatPrice = (price: number) => {
    if (price < 0.001) return price.toFixed(8)
    if (price < 1) return price.toFixed(6)
    if (price < 100) return price.toFixed(4)
    return price.toFixed(2)
  }

  return (
    <div className="card p-4 relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-primary text-xl font-bold animate-pulse">Loading Chart... 🚀</div>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedCoin}</h2>
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">LIVE</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl sm:text-3xl font-bold text-primary">
              ${formatPrice(currentPrice)}
            </span>
            <span className={`text-sm sm:text-base font-semibold ${priceChange >= 0 ? 'text-success' : 'text-danger'}`}>
              {priceChange >= 0 ? '↑' : '↓'} {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
        </div>
        
        {/* Timeframe buttons */}
        <div className="flex space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <button className="btn btn-secondary text-xs sm:text-sm whitespace-nowrap px-3 py-1">1m</button>
          <button className="btn btn-secondary text-xs sm:text-sm whitespace-nowrap px-3 py-1">5m</button>
          <button className="btn btn-secondary text-xs sm:text-sm whitespace-nowrap px-3 py-1">15m</button>
          <button className="btn btn-primary text-xs sm:text-sm whitespace-nowrap px-3 py-1">1H</button>
          <button className="btn btn-secondary text-xs sm:text-sm whitespace-nowrap px-3 py-1">4H</button>
          <button className="btn btn-secondary text-xs sm:text-sm whitespace-nowrap px-3 py-1">1D</button>
        </div>
      </div>

      {/* Meme Coin Selector */}
      <div className="mb-4 flex flex-wrap gap-2">
        {MEME_COINS.map((coin) => (
          <button
            key={coin.symbol}
            onClick={() => handleCoinChange(coin.symbol)}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
              selectedCoin === coin.symbol
                ? 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg scale-105'
                : 'bg-card-hover text-gray-300 hover:bg-border hover:text-white'
            }`}
          >
            {coin.name}
          </button>
        ))}
      </div>

      <div ref={chartContainerRef} className="w-full" />
      
      {/* Live indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-400">Live Price</span>
      </div>
    </div>
  )
}
