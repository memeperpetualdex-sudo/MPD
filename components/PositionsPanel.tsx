'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { formatNumber, formatUSD, formatPercentage } from '@/lib/utils'

interface Position {
  id: string
  symbol: string
  side: 'long' | 'short'
  size: number
  entryPrice: number
  markPrice: number
  liquidationPrice: number
  leverage: number
  pnl: number
  pnlPercentage: number
}

export default function PositionsPanel() {
  const [activeTab, setActiveTab] = useState<'positions' | 'orders' | 'history'>('positions')
  const [positions, setPositions] = useState<Position[]>([
    {
      id: '1',
      symbol: 'SOL/USD',
      side: 'long',
      size: 10.5,
      entryPrice: 98.50,
      markPrice: 100.45,
      liquidationPrice: 93.20,
      leverage: 10,
      pnl: 204.75,
      pnlPercentage: 19.7,
    },
    {
      id: '2',
      symbol: 'BTC/USD',
      side: 'short',
      size: 0.5,
      entryPrice: 45200,
      markPrice: 44800,
      liquidationPrice: 47100,
      leverage: 5,
      pnl: 200,
      pnlPercentage: 8.8,
    },
  ])

  const handleClosePosition = (id: string) => {
    if (confirm('Are you sure you want to close this position?')) {
      setPositions(positions.filter(p => p.id !== id))
    }
  }

  return (
    <div className="card">
      <div className="border-b border-border">
        <div className="flex space-x-6 px-4">
          <button
            onClick={() => setActiveTab('positions')}
            className={`py-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'positions'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Positions ({positions.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Open Orders (0)
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'history'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Trade History
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'positions' && (
          <>
            {positions.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p>No open positions</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-border">
                      <th className="text-left py-2 px-2">Symbol</th>
                      <th className="text-left py-2 px-2">Side</th>
                      <th className="text-right py-2 px-2">Size</th>
                      <th className="text-right py-2 px-2">Entry Price</th>
                      <th className="text-right py-2 px-2">Mark Price</th>
                      <th className="text-right py-2 px-2">Liq. Price</th>
                      <th className="text-center py-2 px-2">Leverage</th>
                      <th className="text-right py-2 px-2">PnL</th>
                      <th className="text-center py-2 px-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((position) => (
                      <tr key={position.id} className="border-b border-border hover:bg-card-hover">
                        <td className="py-3 px-2 font-semibold text-white">
                          {position.symbol}
                        </td>
                        <td className="py-3 px-2">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              position.side === 'long'
                                ? 'bg-success/20 text-success'
                                : 'bg-danger/20 text-danger'
                            }`}
                          >
                            {position.side.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right text-white">
                          {formatNumber(position.size, 2)}
                        </td>
                        <td className="py-3 px-2 text-right text-white">
                          {formatUSD(position.entryPrice)}
                        </td>
                        <td className="py-3 px-2 text-right text-white">
                          {formatUSD(position.markPrice)}
                        </td>
                        <td className="py-3 px-2 text-right text-danger">
                          {formatUSD(position.liquidationPrice)}
                        </td>
                        <td className="py-3 px-2 text-center text-white">
                          {position.leverage}x
                        </td>
                        <td className="py-3 px-2 text-right">
                          <div
                            className={`font-semibold ${
                              position.pnl >= 0 ? 'text-success' : 'text-danger'
                            }`}
                          >
                            {formatUSD(position.pnl)}
                          </div>
                          <div
                            className={`text-xs ${
                              position.pnl >= 0 ? 'text-success' : 'text-danger'
                            }`}
                          >
                            {formatPercentage(position.pnlPercentage)}
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <button
                            onClick={() => handleClosePosition(position.id)}
                            className="btn btn-danger py-1 px-3 text-xs flex items-center space-x-1 mx-auto"
                          >
                            <X size={14} />
                            <span>Close</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {activeTab === 'orders' && (
          <div className="text-center py-12 text-gray-400">
            <p>No open orders</p>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="text-center py-12 text-gray-400">
            <p>No trade history</p>
          </div>
        )}
      </div>
    </div>
  )
}
