'use client'

import { useEffect, useState } from 'react'
import { formatNumber } from '@/lib/utils'

interface OrderBookEntry {
  price: number
  size: number
  total: number
}

export default function OrderBook() {
  const [asks, setAsks] = useState<OrderBookEntry[]>([])
  const [bids, setBids] = useState<OrderBookEntry[]>([])

  useEffect(() => {
    // Generate sample orderbook data
    const generateOrders = (basePrice: number, isAsk: boolean) => {
      const orders: OrderBookEntry[] = []
      let total = 0

      for (let i = 0; i < 15; i++) {
        const priceOffset = (Math.random() * 0.5 + 0.1) * (isAsk ? 1 : -1)
        const price = basePrice + priceOffset * i
        const size = Math.random() * 10 + 1
        total += size

        orders.push({
          price,
          size,
          total,
        })
      }

      return isAsk ? orders : orders.reverse()
    }

    const updateOrderBook = () => {
      const basePrice = 100
      setAsks(generateOrders(basePrice, true))
      setBids(generateOrders(basePrice, false))
    }

    updateOrderBook()
    const interval = setInterval(updateOrderBook, 2000)

    return () => clearInterval(interval)
  }, [])

  const renderOrders = (orders: OrderBookEntry[], isAsk: boolean) => {
    const maxTotal = Math.max(...orders.map(o => o.total))

    return orders.map((order, index) => {
      const percentage = (order.total / maxTotal) * 100

      return (
        <div
          key={index}
          className="relative grid grid-cols-3 gap-2 px-3 py-1 text-sm hover:bg-card-hover cursor-pointer transition-colors"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: isAsk ? '#ff4757' : '#00d4aa',
              width: `${percentage}%`,
              right: isAsk ? 0 : 'auto',
              left: isAsk ? 'auto' : 0,
            }}
          />
          <span className={`relative z-10 ${isAsk ? 'text-danger' : 'text-success'}`}>
            {formatNumber(order.price, 2)}
          </span>
          <span className="relative z-10 text-gray-300 text-right">
            {formatNumber(order.size, 3)}
          </span>
          <span className="relative z-10 text-gray-400 text-right">
            {formatNumber(order.total, 2)}
          </span>
        </div>
      )
    })
  }

  return (
    <div className="card h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-bold text-white">Order Book</h3>
      </div>

      <div className="p-3 border-b border-border">
        <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 font-semibold">
          <span>Price (USD)</span>
          <span className="text-right">Size (SOL)</span>
          <span className="text-right">Total</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Asks */}
        <div className="flex flex-col-reverse">
          {renderOrders(asks, true)}
        </div>

        {/* Spread */}
        <div className="px-3 py-2 bg-card-hover border-y border-border">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Spread</span>
            <span className="text-sm font-semibold text-white">
              {formatNumber(0.05, 2)} (0.05%)
            </span>
          </div>
        </div>

        {/* Bids */}
        <div>
          {renderOrders(bids, false)}
        </div>
      </div>
    </div>
  )
}
