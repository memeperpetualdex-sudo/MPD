'use client'

import { PieChart, TrendingUp, Lock, Users, Rocket, Flame, Shield, Zap, Trophy, Coins } from 'lucide-react'

export default function Tokenomics() {
  const tokenomics = [
    {
      category: 'Public Sale (Pump.fun)',
      percentage: 40,
      color: 'from-cyan-400 to-blue-500',
      icon: Rocket,
      description: 'Fair launch on Pump.fun - No presale, no VC allocation!',
      amount: '400M MPD'
    },
    {
      category: 'Liquidity Pool',
      percentage: 25,
      color: 'from-purple-400 to-pink-500',
      icon: TrendingUp,
      description: 'Locked liquidity for 2 years on Raydium & Orca',
      amount: '250M MPD'
    },
    {
      category: 'Staking Rewards',
      percentage: 15,
      color: 'from-pink-400 to-purple-500',
      icon: Trophy,
      description: 'Long-term staking rewards for diamond hands 💎',
      amount: '150M MPD'
    },
    {
      category: 'Team & Development',
      percentage: 10,
      color: 'from-yellow-400 to-orange-500',
      icon: Users,
      description: '2-year vesting with 6-month cliff',
      amount: '100M MPD'
    },
    {
      category: 'Marketing & Partnerships',
      percentage: 5,
      color: 'from-green-400 to-emerald-500',
      icon: Zap,
      description: 'Influencer campaigns, CEX listings, partnerships',
      amount: '50M MPD'
    },
    {
      category: 'Treasury & Insurance',
      percentage: 5,
      color: 'from-blue-400 to-cyan-500',
      icon: Shield,
      description: 'Protocol insurance fund & emergency reserves',
      amount: '50M MPD'
    },
  ]

  const features = [
    {
      icon: Flame,
      title: 'Auto-Burn Mechanism',
      description: '2% of trading fees burned forever',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Trophy,
      title: 'Holder Rewards',
      description: '3% reflected to all holders',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Liquidity Locked',
      description: '2-year lock on all LP tokens',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Audited Contract',
      description: 'CertiK verified smart contract',
      color: 'from-cyan-500 to-blue-500'
    },
  ]

  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
              <PieChart className="text-purple-400" size={24} />
              <span className="text-purple-400 font-bold uppercase tracking-wider">Tokenomics</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            MPD Token Economics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Total Supply: <span className="text-pink-400 font-black">1,000,000,000 MPD</span> 🪙
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 font-bold">Chain: Solana</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              <span className="text-purple-400 font-bold">Launch: Pump.fun</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30">
              <span className="text-pink-400 font-bold">No Presale</span>
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pie Chart Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
              
              {/* Distribution Cards */}
              <div className="space-y-3">
                {tokenomics.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-r p-[2px] rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    >
                      <div className={`bg-card rounded-xl p-4 backdrop-blur-xl flex items-center gap-4`}>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-white text-sm">{item.category}</h4>
                            <span className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                              {item.percentage}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mb-1">{item.amount}</p>
                          <p className="text-xs text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white mb-8">
              🔥 Why MPD is Different
            </h3>
            
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Coins className="text-cyan-400" size={20} />
                Token Utility
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span>Trading fee discounts (up to 50%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                  <span>Staking rewards (APY up to 100%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span>Exclusive access to new features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  <span>VIP trading competitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Initial Price', value: '$0.0001', color: 'cyan' },
            { label: 'Target MCap', value: '$100M+', color: 'purple' },
            { label: 'Burn Rate', value: '2% Daily', color: 'pink' },
            { label: 'Holder Rewards', value: '3% APY', color: 'yellow' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-500/5 border border-${stat.color}-500/30 text-center hover:scale-105 transition-transform`}
            >
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className={`text-2xl md:text-3xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl text-white font-black text-xl flex items-center gap-4 hover:scale-105 transition-transform">
              <Rocket size={32} />
              <div className="text-left">
                <div>Buy MPD on Pump.fun</div>
                <div className="text-sm font-normal opacity-90">Join the revolution now! 🚀</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
