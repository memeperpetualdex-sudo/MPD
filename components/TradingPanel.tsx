'use client'

import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatNumber } from '@/lib/utils'

type OrderType = 'market' | 'limit'
type OrderSide = 'long' | 'short'

export default function TradingPanel() {
  const { connected } = useWallet()
  const [orderType, setOrderType] = useState<OrderType>('market')
  const [orderSide, setOrderSide] = useState<OrderSide>('long')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')
  const [leverage, setLeverage] = useState(10)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!connected) {
      alert('Please connect your wallet first!')
      return
    }
    // Handle order submission
    alert(`Order submitted: ${orderSide.toUpperCase()} ${amount} SOL at ${leverage}x leverage`)
  }

  return (
    <div className="card">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-bold text-white">Open Position</h3>
      </div>

      <div className="p-4">
        {/* Order Side */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setOrderSide('long')}
            className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
              orderSide === 'long'
                ? 'bg-success text-white'
                : 'bg-card-hover text-gray-400 hover:bg-card-hover/80'
            }`}
          >
            <TrendingUp size={18} />
            <span>Long</span>
          </button>
          <button
            onClick={() => setOrderSide('short')}
            className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
              orderSide === 'short'
                ? 'bg-danger text-white'
                : 'bg-card-hover text-gray-400 hover:bg-card-hover/80'
            }`}
          >
            <TrendingDown size={18} />
            <span>Short</span>
          </button>
        </div>

        {/* Order Type */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setOrderType('market')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              orderType === 'market'
                ? 'bg-primary text-white'
                : 'bg-card-hover text-gray-400 hover:bg-card-hover/80'
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setOrderType('limit')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              orderType === 'limit'
                ? 'bg-primary text-white'
                : 'bg-card-hover text-gray-400 hover:bg-card-hover/80'
            }`}
          >
            Limit
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Leverage Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm text-gray-400">Leverage</label>
              <span className="text-sm font-bold text-primary">{leverage}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full h-2 bg-card-hover rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1x</span>
              <span>5x</span>
              <span>10x</span>
              <span>15x</span>
              <span>20x</span>
            </div>
          </div>

          {/* Price Input (for limit orders) */}
          {orderType === 'limit' && (
            <div>
              <label className="block text-sm text-gray-400 mb-2">Price (USD)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="input w-full"
                step="0.01"
              />
            </div>
          )}

          {/* Amount Input */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount (SOL)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="input w-full"
              step="0.01"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Available: 0.00 SOL</span>
              <button type="button" className="text-primary hover:text-primary-hover">
                Max
              </button>
            </div>
          </div>

          {/* Order Info */}
          <div className="bg-card-hover rounded-lg p-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Entry Price</span>
              <span className="text-white">${formatNumber(100.45, 2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Liquidation Price</span>
              <span className="text-danger">${formatNumber(95.23, 2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Fees</span>
              <span className="text-white">0.10%</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!connected}
            className={`w-full py-3 rounded-lg font-bold transition-all ${
              !connected
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : orderSide === 'long'
                ? 'btn-success'
                : 'btn-danger'
            }`}
          >
            {!connected
              ? 'Connect Wallet'
              : `Open ${orderSide === 'long' ? 'Long' : 'Short'} Position`}
          </button>
        </form>
      </div>
    </div>
  )
}
