'use client'

import { Github, Twitter, Send, BookOpen, Rocket, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-card/80 to-card/60 backdrop-blur-xl mt-auto relative overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Rocket size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent footer-heading">
                MPD
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              The ultimate <span className="text-cyan-400 font-semibold">meme perpetual DEX</span> on Solana. Trade with up to <span className="text-pink-400 font-bold">100x leverage</span> 🚀
            </p>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield size={16} className="text-cyan-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Zap size={16} className="text-purple-400" />
                <span>Fast</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider footer-heading border-l-4 border-cyan-500 pl-3">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Perpetual Futures</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Spot Trading</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Staking</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider footer-heading border-l-4 border-purple-500 pl-3">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about#resources" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                  <BookOpen size={14} className="group-hover:text-cyan-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">GitBook Docs</span>
                </Link>
              </li>
              <li>
                <Link href="/about#tokenomics" className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Tokenomics</span>
                </Link>
              </li>
              <li>
                <Link href="/about#roadmap" className="text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Roadmap</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider footer-heading border-l-4 border-pink-500 pl-3">
              Community
            </h3>
            <div className="flex gap-3">
              <a
                href="https://x.com/DexPerpetu38080"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Twitter"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-gray-300 hover:text-white hover:border-cyan-400 transition-all duration-300">
                  <Twitter size={18} />
                </div>
              </a>
              <a
                href="#"
                className="group relative"
                aria-label="Telegram"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300">
                  <Send size={18} />
                </div>
              </a>
              <a
                href="#"
                className="group relative"
                aria-label="Github"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 text-gray-300 hover:text-white hover:border-pink-400 transition-all duration-300">
                  <Github size={18} />
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Join our community to stay updated with the latest meme coin trends! 🔥
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">
              © 2024 <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MPD - Meme Perpetual DEX</span>
            </p>
            <p className="text-xs text-gray-400">
              Built with <span className="text-red-400">❤️</span> on <span className="font-semibold text-purple-400">Solana</span> 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
