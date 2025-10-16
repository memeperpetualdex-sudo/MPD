import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Roadmap from '@/components/Roadmap'
import Tokenomics from '@/components/Tokenomics'
import Resources from '@/components/Resources'
import Image from 'next/image'

export default function About() {
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
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-block animate-bounce">
              <span className="text-6xl">🚀</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MPD - Meme Perpetual DEX
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The <span className="text-cyan-400 font-bold">first meme-focused</span> perpetual trading platform on Solana. 
              Trade your favorite pump.fun coins with <span className="text-pink-400 font-bold">100x leverage</span>! 💎
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {[
                { label: 'Total Supply', value: '1B MPD', icon: '🪙' },
                { label: 'Launch Platform', value: 'Pump.fun', icon: '🚀' },
                { label: 'Max Leverage', value: '100x', icon: '⚡' },
                { label: 'Chain', value: 'Solana', icon: '◎' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-white/10 hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a
                href="/"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform">
                  Start Trading Now 🎯
                </div>
              </a>
              <a
                href="#tokenomics"
                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all"
              >
                View Tokenomics 📊
              </a>
            </div>
          </div>
        </section>

        <Tokenomics />
        <Roadmap />
        <Resources />
      </main>

      <Footer />
    </div>
  )
}
