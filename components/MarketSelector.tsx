'use client'

import { useState, useEffect } from 'react'
import { Search, Star, TrendingUp, TrendingDown } from 'lucide-react'
import { formatNumber, formatPercentage } from '@/lib/utils'

interface Market {
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: number
  isFavorite: boolean
  emoji: string
  isPumpFun: boolean
}

// Famous meme coins from pump.fun and Solana
const INITIAL_MARKETS: Market[] = [
  {
    symbol: 'SOL/USD',
    name: 'Solana',
    price: 150.45,
    change24h: 5.67,
    volume24h: 1250000000,
    isFavorite: true,
    emoji: '⚡',
    isPumpFun: false,
  },
  {
    symbol: 'BONK/USD',
    name: 'Bonk',
    price: 0.000015,
    change24h: 12.34,
    volume24h: 85000000,
    isFavorite: true,
    emoji: '🐕',
    isPumpFun: true,
  },
  {
    symbol: 'WIF/USD',
    name: 'dogwifhat',
    price: 2.45,
    change24h: 8.21,
    volume24h: 120000000,
    isFavorite: true,
    emoji: '🐶',
    isPumpFun: true,
  },
  {
    symbol: 'MYRO/USD',
    name: 'Myro',
    price: 0.152,
    change24h: -3.45,
    volume24h: 45000000,
    isFavorite: false,
    emoji: '🐭',
    isPumpFun: true,
  },
  {
    symbol: 'POPCAT/USD',
    name: 'Popcat',
    price: 0.85,
    change24h: 15.67,
    volume24h: 65000000,
    isFavorite: false,
    emoji: '🐱',
    isPumpFun: true,
  },
  {
    symbol: 'WEN/USD',
    name: 'Wen',
    price: 0.0001,
    change24h: 25.89,
    volume24h: 35000000,
    isFavorite: false,
    emoji: '⏰',
    isPumpFun: true,
  },
  {
    symbol: 'ANALOS/USD',
    name: 'Analos',
    price: 0.025,
    change24h: -5.21,
    volume24h: 28000000,
    isFavorite: false,
    emoji: '🔥',
    isPumpFun: true,
  },
  {
    symbol: 'PONKE/USD',
    name: 'Ponke',
    price: 0.45,
    change24h: 18.34,
    volume24h: 52000000,
    isFavorite: false,
    emoji: '🦧',
    isPumpFun: true,
  },
]

export default function MarketSelector() {
  const [searchQuery, setSearchQuery] = useState('')
  const [markets, setMarkets] = useState<Market[]>(INITIAL_MARKETS)

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarkets(prevMarkets =>
        prevMarkets.map(market => {
          // Random price change between -2% to +2%
          const changePercent = (Math.random() - 0.48) * 4 // Slight upward bias
          const newPrice = market.price * (1 + changePercent / 100)
          
          // Update 24h change
          const newChange24h = market.change24h + (Math.random() - 0.5) * 2
          
          return {
            ...market,
            price: newPrice,
            change24h: newChange24h,
          }
        })
      )
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const toggleFavorite = (symbol: string) => {
    setMarkets(markets.map(m => 
      m.symbol === symbol ? { ...m, isFavorite: !m.isFavorite } : m
    ))
  }

  const filteredMarkets = markets.filter(m =>
    m.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatPrice = (price: number) => {
    if (price < 0.001) return price.toFixed(8)
    if (price < 1) return price.toFixed(6)
    if (price < 100) return price.toFixed(4)
    return price.toFixed(2)
  }

  return (
    <div className="card h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          🚀 Meme Markets
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search meme coins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input w-full pl-10"
          />
        </div>
        
        {/* Pump.fun Badge */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <div className="px-2 py-1 bg-primary/20 text-primary rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            pump.fun Listed
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredMarkets.map((market) => (
          <div
            key={market.symbol}
            className="px-4 py-3 border-b border-border hover:bg-card-hover cursor-pointer transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(market.symbol)
                  }}
                  className="text-gray-400 hover:text-warning transition-colors"
                  aria-label="Toggle favorite"
                >
                  <Star
                    size={16}
                    className={market.isFavorite ? 'fill-warning text-warning' : ''}
                  />
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{market.emoji}</span>
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">
                      {market.symbol}
                    </div>
                    {market.isPumpFun && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full">
                        PF
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">{market.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">
                  ${formatPrice(market.price)}
                </div>
                <div
                  className={`text-xs flex items-center justify-end space-x-1 ${
                    market.change24h >= 0 ? 'text-success' : 'text-danger'
                  }`}
                >
                  {market.change24h >= 0 ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  <span>{formatPercentage(market.change24h)}</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-400 flex items-center justify-between">
              <span>Vol: ${formatNumber(market.volume24h / 1000000, 2)}M</span>
              {market.change24h > 10 && (
                <span className="text-primary animate-pulse">🚀 MOONING!</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Live Updates Indicator */}
      <div className="p-3 border-t border-border bg-card-hover">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Live prices updating</span>
        </div>
      </div>
    </div>
  )
}
