'use client'

import { Book, FileText, Code, Shield, Twitter, Send, Github, Globe, ExternalLink, Sparkles } from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      title: 'GitBook Documentation',
      description: 'Complete guide to MPD protocol, trading strategies, and API references',
      icon: Book,
      color: 'from-cyan-500 to-blue-500',
      links: [
        { name: 'Getting Started', url: '#' },
        { name: 'Trading Guide', url: '#' },
        { name: 'API Documentation', url: '#' },
        { name: 'Smart Contracts', url: '#' },
      ]
    },
    {
      title: 'Whitepaper',
      description: 'Deep dive into MPD tokenomics, protocol mechanics, and vision',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Read Whitepaper', url: '#' },
        { name: 'Litepaper', url: '#' },
        { name: 'Technical Specs', url: '#' },
      ]
    },
    {
      title: 'Developer Resources',
      description: 'Build on top of MPD with our developer tools and SDKs',
      icon: Code,
      color: 'from-pink-500 to-purple-500',
      links: [
        { name: 'GitHub Repository', url: '#' },
        { name: 'NPM Package', url: '#' },
        { name: 'Developer Portal', url: '#' },
      ]
    },
    {
      title: 'Security & Audits',
      description: 'All security audits, bug bounty program, and safety measures',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      links: [
        { name: 'CertiK Audit', url: '#' },
        { name: 'Bug Bounty', url: '#' },
        { name: 'Security Policy', url: '#' },
      ]
    },
  ]

  const socialLinks = [
    {
      name: 'Twitter (X)',
      icon: Twitter,
      url: 'https://x.com/DexPerpetu38080',
      color: 'from-cyan-500 to-blue-500',
      description: 'Follow for updates & announcements'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: '#',
      color: 'from-blue-500 to-purple-500',
      description: 'Join our community chat'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      color: 'from-purple-500 to-pink-500',
      description: 'Explore our open-source code'
    },
    {
      name: 'Website',
      icon: Globe,
      url: '#',
      color: 'from-pink-500 to-cyan-500',
      description: 'Visit our main website'
    },
  ]

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="text-cyan-400" size={24} />
              <span className="text-cyan-400 font-bold uppercase tracking-wider">Resources</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Learn & Build with MPD
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to <span className="text-cyan-400 font-bold">master MPD trading</span> and <span className="text-pink-400 font-bold">build amazing dApps</span>
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>

                {/* Links */}
                <div className="space-y-2">
                  {resource.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/link"
                    >
                      <span className="text-gray-300 group-hover/link:text-white transition-colors">
                        {link.name}
                      </span>
                      <ExternalLink size={16} className="text-gray-400 group-hover/link:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-center text-white mb-8">
            🌐 Connect with MPD Community
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="relative bg-card rounded-xl p-6 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white text-center mb-2">{social.name}</h4>
                    <p className="text-sm text-gray-400 text-center">{social.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* GitBook CTA */}
        <div className="relative bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 sm:p-12 border border-cyan-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 mb-4">
              <Book size={40} className="text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              📚 Comprehensive GitBook Documentation
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn everything about MPD - from basic trading to advanced strategies. Our GitBook covers tutorials, API docs, smart contract specs, and more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  <Book size={24} />
                  <span>Open GitBook</span>
                  <ExternalLink size={20} />
                </div>
              </a>
              <a
                href="https://x.com/DexPerpetu38080"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  <Twitter size={24} />
                  <span>Follow on X</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
