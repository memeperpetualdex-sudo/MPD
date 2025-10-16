'use client'

import { Rocket, Zap, Trophy, Target, Globe, Users, Sparkles, Crown, TrendingUp, Shield, Book, Twitter } from 'lucide-react'

export default function Roadmap() {
  const roadmapData = [
    {
      quarter: 'Q4 2025',
      title: '🚀 Launch Phase',
      status: 'current',
      color: 'from-cyan-500 to-blue-500',
      items: [
        { icon: Rocket, text: 'MPD Token Launch on Pump.fun', highlight: true },
        { icon: Globe, text: 'Website & Dapp V1 Launch' },
        { icon: Users, text: 'Community Building (10K+ holders target)' },
        { icon: Twitter, text: 'Social Media Campaigns & Partnerships' },
        { icon: Shield, text: 'Smart Contract Audit by CertiK' },
        { icon: Book, text: 'GitBook Documentation Release' },
      ]
    },
    {
      quarter: 'Q1 2026',
      title: '⚡ Growth Phase',
      status: 'upcoming',
      color: 'from-purple-500 to-pink-500',
      items: [
        { icon: TrendingUp, text: 'DEX Listing: Raydium & Orca Integration' },
        { icon: Zap, text: 'Perpetual Trading V1 (Up to 20x Leverage)' },
        { icon: Users, text: 'Influencer Marketing Campaign' },
        { icon: Sparkles, text: 'Staking & Farming Pools Launch' },
        { icon: Trophy, text: 'Trading Competition ($50K Prize Pool)' },
        { icon: Globe, text: 'Multi-language Support (EN, CN, KR, JP)' },
      ]
    },
    {
      quarter: 'Q2 2026',
      title: '💎 Expansion Phase',
      status: 'upcoming',
      color: 'from-pink-500 to-purple-500',
      items: [
        { icon: Crown, text: 'CEX Listings (Gate.io, MEXC, Bybit)' },
        { icon: Target, text: 'Perpetual Trading V2 (Up to 100x Leverage)' },
        { icon: Sparkles, text: 'NFT Collection Launch (MPD Apes)' },
        { icon: Shield, text: 'Insurance Fund Launch ($1M+)' },
        { icon: Users, text: 'DAO Governance Implementation' },
        { icon: TrendingUp, text: 'Cross-chain Bridge (Solana ↔ Ethereum)' },
      ]
    },
    {
      quarter: 'Q3 2026',
      title: '🌟 Innovation Phase',
      status: 'upcoming',
      color: 'from-cyan-500 to-purple-500',
      items: [
        { icon: Rocket, text: 'Mobile App Launch (iOS & Android)' },
        { icon: Zap, text: 'AI Trading Bot Integration' },
        { icon: Trophy, text: 'Leaderboard & Rewards System' },
        { icon: Globe, text: 'Global Marketing Campaign' },
        { icon: Sparkles, text: 'Limit Orders & Advanced Trading Tools' },
        { icon: Users, text: 'Partnership with Major Meme Projects' },
      ]
    },
    {
      quarter: 'Q4 2026',
      title: '👑 Domination Phase',
      status: 'upcoming',
      color: 'from-yellow-500 to-orange-500',
      items: [
        { icon: Crown, text: 'Top 5 Meme DEX on Solana' },
        { icon: TrendingUp, text: 'Options Trading Launch' },
        { icon: Shield, text: 'Enhanced Security Features & Multi-sig' },
        { icon: Sparkles, text: 'Metaverse Integration & Virtual Trading' },
        { icon: Users, text: '100K+ Active Traders Milestone' },
        { icon: Rocket, text: 'MPD V2 Token Upgrade & Buyback Program' },
      ]
    },
  ]

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <Target className="text-cyan-400" size={24} />
              <span className="text-cyan-400 font-bold uppercase tracking-wider">Roadmap</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Journey to the Moon
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From <span className="text-cyan-400 font-bold">Pump.fun launch</span> to becoming the <span className="text-pink-400 font-bold">#1 Meme Perpetual DEX</span> 🚀
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div
                key={phase.quarter}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-background z-10 animate-pulse"></div>

                <div className={`md:${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  {/* Card */}
                  <div className={`group relative bg-gradient-to-br ${phase.color} p-[2px] rounded-2xl transition-all duration-300 hover:scale-105 ${
                    phase.status === 'current' ? 'shadow-2xl shadow-cyan-500/50 animate-pulse' : ''
                  }`}>
                    <div className="bg-card rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
                      {/* Quarter Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white font-bold text-sm`}>
                          {phase.quarter}
                        </div>
                        {phase.status === 'current' && (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                            <span className="text-cyan-400 font-bold text-xs uppercase">Current</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                        {phase.title}
                      </h3>

                      {/* Items */}
                      <div className="space-y-3">
                        {phase.items.map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <div
                              key={idx}
                              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 ${
                                item.highlight ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30' : ''
                              } ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                                <Icon size={20} className="text-white" />
                              </div>
                              <p className={`flex-1 text-gray-300 font-medium ${item.highlight ? 'text-white font-bold' : ''}`}>
                                {item.text}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://x.com/DexPerpetu38080"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                <Twitter size={24} />
                <span>Follow Our Journey on X</span>
              </div>
            </a>
            <a
              href="#tokenomics"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                <Sparkles size={24} />
                <span>View Tokenomics</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
