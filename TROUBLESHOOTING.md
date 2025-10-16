# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. Wallet Connection Issues

#### Problem: "Wallet not detected"
**Solution:**
- Install Phantom Wallet extension
- Refresh the page
- Make sure you're using a supported browser (Chrome, Firefox, Brave)

#### Problem: "Connection failed"
**Solution:**
- Check if Phantom wallet is unlocked
- Try disconnecting and reconnecting
- Clear browser cache and cookies
- Update Phantom extension to latest version

### 2. Build & Development Issues

#### Problem: `Module not found` errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# or on Windows:
rmdir /s node_modules
npm install
```

#### Problem: Port 3000 already in use
**Solution:**
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Or use different port:
PORT=3001 npm run dev
```

#### Problem: TypeScript errors
**Solution:**
```bash
# Regenerate TypeScript definitions
rm -rf .next
npm run dev

# Check tsconfig.json is correct
# Ensure all dependencies are installed
```

### 3. Trading Issues

#### Problem: "Insufficient funds" when trying to trade
**Solution:**
- Make sure your wallet has SOL for transaction
- Check if you have enough balance
- Account for transaction fees (~0.000005 SOL)

#### Problem: Orders not executing
**Solution:**
- This is a demo interface - real trading requires:
  - Integration with actual DEX protocol
  - Smart contract implementation
  - Backend infrastructure

### 4. Chart Issues

#### Problem: Chart not displaying
**Solution:**
- Check browser console for errors
- Ensure `lightweight-charts` is installed
- Try refreshing the page
- Clear browser cache

#### Problem: Chart data not updating
**Solution:**
- This is demo data with simulated updates
- For real data, integrate with price feeds like:
  - Pyth Network
  - Switchboard
  - Chainlink on Solana

### 5. Styling Issues

#### Problem: Styles not applying
**Solution:**
```bash
# Rebuild Tailwind
npm run dev

# If still not working:
rm -rf .next
npm run dev
```

#### Problem: Dark mode not working
**Solution:**
- Check `globals.css` is imported
- Verify Tailwind config is correct
- Clear browser cache

### 6. Deployment Issues

#### Problem: Vercel build fails
**Solution:**
1. Test build locally first:
```bash
npm run build
```
2. Check build logs in Vercel dashboard
3. Ensure all environment variables are set
4. Check `next.config.js` is correct

#### Problem: "Module not found" on Vercel
**Solution:**
- Make sure dependency is in `dependencies`, not `devDependencies`
- Check import paths use correct casing
- Verify all files are committed to Git

#### Problem: Images not loading on Vercel
**Solution:**
- Use Next.js Image component
- Configure image domains in `next.config.js`
- Or use unoptimized images

### 7. Performance Issues

#### Problem: Slow page load
**Solution:**
- Enable production mode: `npm run build && npm start`
- Optimize images
- Check network tab for slow requests
- Consider CDN for static assets

#### Problem: High memory usage
**Solution:**
- Close unused browser tabs
- Clear browser cache
- Reduce chart data points
- Optimize component re-renders

### 8. Solana Network Issues

#### Problem: "Transaction failed"
**Solution:**
- Check network status: [status.solana.com](https://status.solana.com)
- Try switching RPC endpoint
- Increase transaction timeout
- Check SOL balance for fees

#### Problem: Slow transactions
**Solution:**
- Use premium RPC endpoints:
  - [QuickNode](https://www.quicknode.com/)
  - [Alchemy](https://www.alchemy.com/)
  - [Helius](https://www.helius.dev/)
- Increase compute budget
- Optimize transaction size

## Getting Help

### Before Asking for Help

1. Check this troubleshooting guide
2. Search existing issues on GitHub
3. Check browser console for errors
4. Try the solution steps above

### How to Report Issues

When reporting issues, include:
1. **Description**: What happened vs what you expected
2. **Steps to reproduce**: How to recreate the issue
3. **Environment**:
   - Browser version
   - Node.js version
   - OS (Windows/Mac/Linux)
4. **Console errors**: Screenshots of console
5. **Code**: Relevant code snippets

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Solana Documentation](https://docs.solana.com/)
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### Community

- [Solana Discord](https://discord.gg/solana)
- [Solana StackExchange](https://solana.stackexchange.com/)
- [GitHub Discussions](your-repo/discussions)

## Still Having Issues?

Open an issue on GitHub with:
- Detailed description
- Steps to reproduce
- Console errors
- System info

We'll help you resolve it! 🚀
