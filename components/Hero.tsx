'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Rocket, Book, Map, Coins, TrendingUp, Shield, Zap, Users, Twitter, Send, Github, ChevronDown, Sparkles, Target, Trophy, Copy, Check } from 'lucide-react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Contract address (coming soon)
  const CONTRACT_ADDRESS = 'Coming Soon - Launch on Pump.fun'

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats = [
    { label: 'Total Supply', value: '1B MPD', icon: Coins, color: 'from-cyan-500 to-blue-500' },
    { label: 'Fair Launch', value: 'Pump.fun', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { label: 'Max Leverage', value: '100x', icon: Zap, color: 'from-pink-500 to-orange-500' },
    { label: 'Blockchain', value: 'Solana', icon: Shield, color: 'from-green-500 to-cyan-500' },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: 'Trade Meme Perps',
      description: 'Trade your favorite meme coins with up to 100x leverage',
      color: 'from-cyan-500 to-blue-500',
      delay: '0'
    },
    {
      icon: Shield,
      title: 'CertiK Audited',
      description: 'Smart contracts verified by industry-leading security firm',
      color: 'from-purple-500 to-pink-500',
      delay: '100'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'DAO governance, no presale, no VC allocation',
      color: 'from-pink-500 to-orange-500',
      delay: '200'
    },
    {
      icon: Trophy,
      title: 'Earn Rewards',
      description: 'Stake MPD for up to 100% APY + 3% holder rewards',
      color: 'from-green-500 to-cyan-500',
      delay: '300'
    },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo with Animation */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50 animate-float">
              <Image
                src="/logo/logo.jpeg"
                alt="MPD Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient navbar-logo">
            MPD
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-gray-300">
            Meme Perpetual DEX
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          The <span className="text-cyan-400 font-bold">first meme-focused</span> perpetual trading platform on Solana. 
          Trade with <span className="text-pink-400 font-bold">100x leverage</span>! 
          <span className="inline-block ml-2 animate-bounce">🚀</span>
        </p>

        {/* Contract Address - Click to Copy */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="text-gray-400 text-sm mb-2 flex items-center justify-center gap-2">
              <Shield size={16} className="text-cyan-400" />
              <span>Contract Address</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="group relative w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative px-6 py-4 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-left">
                    <code className="text-sm sm:text-base md:text-lg font-mono text-gray-300 break-all">
                      {CONTRACT_ADDRESS}
                    </code>
                  </div>
                  <div className="flex-shrink-0">
                    {copied ? (
                      <div className="flex items-center gap-2 text-green-400">
                        <Check size={20} />
                        <span className="text-sm font-semibold">Copied!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300">
                        <Copy size={20} />
                        <span className="text-sm font-semibold hidden sm:inline">Copy</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
            <p className="text-gray-500 text-xs mt-2 text-center">
              Click to copy • Will be available after Pump.fun launch 🚀
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Tokenomics Button */}
          <Link href="/about#tokenomics" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              <Coins size={24} className="animate-spin-slow" />
              <span>Tokenomics</span>
              <Sparkles size={20} />
            </div>
          </Link>

          {/* Roadmap Button */}
          <Link href="/about#roadmap" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              <Map size={24} />
              <span>Roadmap</span>
              <Target size={20} />
            </div>
          </Link>

          {/* GitBook Button */}
          <Link href="/about#resources" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl text-white font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              <Book size={24} />
              <span>GitBook</span>
              <ChevronDown size={20} className="animate-bounce" />
            </div>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-white font-bold text-xl">{stat.value}</div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: feature.delay + 'ms' }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:rotate-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-12 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a
            href="https://x.com/DexPerpetu38080"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-gray-300 hover:text-white hover:border-cyan-400 transition-all duration-300 hover:scale-110">
              <Twitter size={24} />
            </div>
          </a>
          <a
            href="#"
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 hover:scale-110">
              <Send size={24} />
            </div>
          </a>
          <a
            href="#"
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-gray-300 hover:text-white hover:border-pink-400 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </div>
          </a>
        </div>

        {/* Start Trading Button */}
        <div className={`transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/trade" className="group relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl text-white font-black text-2xl flex items-center gap-4 hover:scale-105 transition-transform border-4 border-white/20">
              <Rocket size={32} className="animate-bounce" />
              <span>Start Trading Now</span>
              <Zap size={32} className="animate-pulse" />
            </div>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-cyan-400 opacity-50" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-orange-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
    </div>
  )
}
