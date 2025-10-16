'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Menu, X, Zap, TrendingUp, Wallet, Trophy, BookOpen } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border/50 bg-gradient-to-r from-card/90 via-card/80 to-card/90 backdrop-blur-xl sticky top-0 z-50 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 border-cyan-500/50 group-hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                <Image 
                  src="/logo/logo.jpeg" 
                  alt="MPD Meme Perpetual DEX" 
                  width={56} 
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent navbar-logo">
                MPD
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider uppercase">
                Meme Perpetual DEX
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="nav-link px-4 py-2 text-gray-300 hover:text-cyan-400 font-semibold flex items-center gap-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group">
              <Zap size={18} className="group-hover:text-cyan-400 transition-colors" />
              <span>Home</span>
            </Link>
            <Link href="/trade" className="nav-link px-4 py-2 text-gray-300 hover:text-purple-400 font-semibold flex items-center gap-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group">
              <TrendingUp size={18} className="group-hover:text-purple-400 transition-colors" />
              <span>Trade</span>
            </Link>
            <a href="#" className="nav-link px-4 py-2 text-gray-300 hover:text-pink-400 font-semibold flex items-center gap-2 rounded-lg hover:bg-pink-500/10 transition-all duration-300 group">
              <Wallet size={18} className="group-hover:text-pink-400 transition-colors" />
              <span>Portfolio</span>
            </a>
            <Link href="/about" className="nav-link px-4 py-2 text-gray-300 hover:text-purple-400 font-semibold flex items-center gap-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group">
              <BookOpen size={18} className="group-hover:text-purple-400 transition-colors" />
              <span>About</span>
            </Link>
            <a href="#" className="nav-link px-4 py-2 text-gray-300 hover:text-yellow-400 font-semibold flex items-center gap-2 rounded-lg hover:bg-yellow-500/10 transition-all duration-300 group">
              <Trophy size={18} className="group-hover:text-yellow-400 transition-colors" />
              <span>Leaderboard</span>
            </a>
          </div>

          {/* Wallet Button */}
          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <WalletMultiButton className="relative !bg-gradient-to-r !from-cyan-500 !via-purple-500 !to-pink-500 !text-white !font-bold !px-6 !py-3 !rounded-xl !transition-all !duration-300 hover:!scale-105 hover:!shadow-2xl !border-2 !border-white/20" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
            <div className="relative text-white p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 mobile-menu-enter border-t border-border/50 mt-2">
            <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transform hover:translate-x-2 border border-transparent hover:border-cyan-500/30">
              <div className="flex items-center gap-3">
                <Zap size={20} />
                <span className="font-semibold">Home</span>
              </div>
            </Link>
            <Link href="/trade" className="block text-gray-300 hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transform hover:translate-x-2 border border-transparent hover:border-purple-500/30">
              <div className="flex items-center gap-3">
                <TrendingUp size={20} />
                <span className="font-semibold">Trade</span>
              </div>
            </Link>
            <a href="#" className="block text-gray-300 hover:text-pink-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-cyan-500/10 transform hover:translate-x-2 border border-transparent hover:border-pink-500/30">
              <div className="flex items-center gap-3">
                <Wallet size={20} />
                <span className="font-semibold">Markets</span>
              </div>
            </a>
            <a href="#" className="block text-gray-300 hover:text-pink-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-cyan-500/10 transform hover:translate-x-2 border border-transparent hover:border-pink-500/30">
              <div className="flex items-center gap-3">
                <Wallet size={20} />
                <span className="font-semibold">Portfolio</span>
              </div>
            </a>
            <Link href="/about" className="block text-gray-300 hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transform hover:translate-x-2 border border-transparent hover:border-purple-500/30">
              <div className="flex items-center gap-3">
                <BookOpen size={20} />
                <span className="font-semibold">About</span>
              </div>
            </Link>
            <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-cyan-500/10 transform hover:translate-x-2 border border-transparent hover:border-yellow-500/30">
              <div className="flex items-center gap-3">
                <Trophy size={20} />
                <span className="font-semibold">Leaderboard</span>
              </div>
            </a>
            <div className="pt-4 px-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-60"></div>
                <WalletMultiButton className="relative w-full !bg-gradient-to-r !from-cyan-500 !via-purple-500 !to-pink-500 !text-white !font-bold !border-2 !border-white/20" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

