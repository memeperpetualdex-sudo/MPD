'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import TradingChart from './TradingChart'
import OrderBook from './OrderBook'
import TradingPanel from './TradingPanel'
import PositionsPanel from './PositionsPanel'
import MarketSelector from './MarketSelector'
import Image from 'next/image'

export default function TradingInterface() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background with Image */}
      <div className="animated-background-image">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/animasi/background.jpeg"
            alt="MPD Background"
            fill
            className="object-cover opacity-20"
            priority
            quality={100}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navbar />
      
      <div className="flex-1 max-w-[1800px] mx-auto w-full p-2 sm:p-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 mb-2 sm:mb-4">
          {/* Market Selector - Left Sidebar */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <MarketSelector />
          </div>

          {/* Main Chart Area */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <TradingChart symbol="SOL/USD" />
          </div>

          {/* Trading Panel - Right Sidebar */}
          <div className="lg:col-span-3 order-3 lg:order-3">
            <TradingPanel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4">
          {/* Order Book */}
          <div className="lg:col-span-3 order-4 lg:order-4">
            <OrderBook />
          </div>

          {/* Positions Panel */}
          <div className="lg:col-span-9 order-5 lg:order-5">
            <PositionsPanel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
