# 🚀 Panduan Deployment ke Vercel

## Persiapan

### 1. Pastikan Kode Siap
```bash
# Test build lokal
npm run build

# Test production mode
npm run start
```

### 2. Push ke GitHub
```bash
# Inisialisasi Git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Ready for deployment"

# Tambahkan remote repository
git remote add origin https://github.com/username/repo-name.git

# Push ke GitHub
git push -u origin main
```

## Deployment ke Vercel

### Metode 1: Melalui Dashboard Vercel (Recommended)

1. **Kunjungi Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub account

2. **Import Project**
   - Klik "Add New..." → "Project"
   - Pilih repository GitHub Anda
   - Klik "Import"

3. **Konfigurasi Project**
   - **Framework Preset**: Next.js (auto-detect)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto)
   - **Output Directory**: `.next` (auto)
   - **Install Command**: `npm install` (auto)

4. **Environment Variables (Optional)**
   Jika ingin menggunakan custom RPC:
   ```
   NEXT_PUBLIC_SOLANA_RPC_ENDPOINT=your_rpc_endpoint
   NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
   ```

5. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build (2-5 menit)
   - Selesai! Anda akan mendapat URL produksi

### Metode 2: Menggunakan Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Deploy**
```bash
# Deploy ke preview
vercel

# Deploy ke production
vercel --prod
```

## Setelah Deployment

### Custom Domain (Optional)
1. Di Vercel Dashboard → Settings → Domains
2. Tambahkan domain Anda
3. Update DNS records sesuai instruksi

### Monitoring
- Vercel otomatis memonitor performa
- Lihat analytics di Dashboard
- Cek logs jika ada error

## Auto-Deployment

Vercel otomatis deploy saat:
- Push ke branch `main` → Production
- Push ke branch lain → Preview deployment
- Pull Request → Preview deployment

## Tips

### Performance
- Vercel otomatis optimize images
- CDN global otomatis aktif
- Edge caching untuk performa maksimal

### Debugging
Jika deployment gagal:
1. Cek build logs di Vercel Dashboard
2. Pastikan `npm run build` sukses di lokal
3. Cek environment variables
4. Pastikan semua dependencies ada di package.json

### Security
- Jangan commit file `.env` ke GitHub
- Gunakan Environment Variables di Vercel
- Review deployment logs

## Update Website

Untuk update website:
```bash
# Buat perubahan
# Test lokal
npm run dev

# Commit dan push
git add .
git commit -m "Update fitur X"
git push

# Vercel otomatis deploy!
```

## Rollback

Jika ada masalah:
1. Buka Vercel Dashboard
2. Pilih Deployments
3. Klik "..." pada deployment sebelumnya
4. Klik "Promote to Production"

## Custom Configuration

Edit `vercel.json` untuk konfigurasi advanced:
```json
{
  "regions": ["sin1"],  // Singapore (untuk Indonesia)
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Troubleshooting

### Build Timeout
- Vercel free tier: 10 menit
- Jika timeout, optimize dependencies

### Module Not Found
- Pastikan package ada di dependencies
- Bukan di devDependencies

### Memory Issues
- Upgrade ke Vercel Pro
- Atau optimize bundle size

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Deployment sukses? Selamat! 🎉**

Share URL Anda: `https://your-project.vercel.app`
