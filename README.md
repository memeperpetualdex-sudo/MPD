# 🚀 MPD - Meme Perpetual DEX on Solana

Trade your favorite memes with leverage! Modern and feature-rich perpetual trading platform built on Solana blockchain with real-time trading capabilities and animated UI.

![Solana](https://img.shields.io/badge/Solana-14F195?style=for-the-badge&logo=solana&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎯 Trade Memes, Stack Gains, Moon Soon! 🌙

## ✨ Features

### 🎯 Core Features
- **Live Perpetual Futures Trading** - Trade with up to 20x leverage
- **🔴 Real-time Price Charts** - Live updating candlestick charts every 2 seconds
- **🚀 Meme Coin Support** - Trade famous Solana meme coins from pump.fun
- **Live Order Book** - Real-time bid/ask orders display with depth visualization
- **Market & Limit Orders** - Flexible order types for any strategy
- **Position Management** - Track and manage your open positions with live PnL

### 🎮 Meme Coins Available
Trade the hottest meme coins that mooned on pump.fun:
- ⚡ **SOL** - Solana (The OG)
- 🐕 **BONK** - First Solana Dog Coin (10,000%+ ATH)
- 🐶 **WIF** - dogwifhat (5,000%+ Moon)
- 🐭 **MYRO** - Community Driven (2,000%+ Gain)
- 🐱 **POPCAT** - Viral Cat Meme (3,000%+ Launch)
- ⏰ **WEN** - "Wen Moon" Token (50,000%+ ATH)
- 🔥 **ANALOS** - Fire Meme (1,500%+ Gain)
- 🦧 **PONKE** - Monkey Business (4,000%+ Moon)

### 💎 Advanced Features
- **Live Price Updates** - Real-time data with 2-3 second refresh
- **Phantom Wallet Integration** - Seamless connection with Phantom
- **Animated UI** - Beautiful background effects and smooth animations
- **Leverage Trading** - Adjustable leverage from 1x to 20x
- **Real-time PnL** - Live profit and loss calculations
- **Liquidation Alerts** - Track liquidation prices closely
- **Market Search** - Quick market selection with search & favorites
- **Pump.fun Integration** - Track coins listed on pump.fun
- **Responsive Design** - Perfect on desktop, tablet & mobile
- **Dark Mode UI** - Beautiful animated background with particles

### 🔒 Security
- **Non-custodial** - Your keys, your coins
- **Solana Network** - Built on fast and secure Solana blockchain
- **Wallet Adapter** - Industry-standard wallet connection

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Blockchain**: Solana Web3.js
- **Wallet**: Solana Wallet Adapter (Phantom support)
- **Charts**: Lightweight Charts
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Phantom wallet browser extension

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd MPD
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment (optional)**
```bash
cp .env.local.example .env.local
# Edit .env.local with your RPC endpoint if needed
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js settings
- Click "Deploy"

### Environment Variables (Optional)
If you want to use a custom Solana RPC endpoint:
- In Vercel dashboard, go to Project Settings → Environment Variables
- Add: `NEXT_PUBLIC_SOLANA_RPC_ENDPOINT`
- Value: Your RPC endpoint URL

## 📱 Usage

### Connecting Wallet
1. Click "Select Wallet" button in the navbar
2. Choose Phantom Wallet
3. Approve the connection in your wallet

### Opening a Position
1. Select a market from the left sidebar
2. Choose Long or Short
3. Select order type (Market or Limit)
4. Adjust leverage slider
5. Enter amount
6. Click "Open Position"

### Managing Positions
- View all open positions in the bottom panel
- Monitor real-time PnL
- Close positions with one click
- Track liquidation prices

## 🎨 Customization

### Changing Colors
Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --background: #0a0e1a;
  --primary: #00d4aa;
  --danger: #ff4757;
  --success: #00d4aa;
}
```

### Adding New Markets
Edit `components/MarketSelector.tsx` to add more trading pairs.

### Modifying Leverage Range
Edit `components/TradingPanel.tsx` to change max leverage:
```tsx
<input type="range" min="1" max="20" ... />
```

## 📊 Project Structure

```
MPD/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── MarketSelector.tsx # Market selection sidebar
│   ├── Navbar.tsx         # Navigation bar
│   ├── OrderBook.tsx      # Order book display
│   ├── PositionsPanel.tsx # Positions management
│   ├── TradingChart.tsx   # Price chart
│   ├── TradingInterface.tsx # Main trading interface
│   ├── TradingPanel.tsx   # Order entry panel
│   └── WalletProvider.tsx # Wallet connection provider
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions
├── logo/                  # Logo assets
│   └── logo.jpeg         # Your logo
├── public/               # Static files
└── README.md            # This file
```

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Solana Foundation for the blockchain infrastructure
- Next.js team for the amazing framework
- TradingView for chart inspiration
- Vercel for hosting platform

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ on Solana**
