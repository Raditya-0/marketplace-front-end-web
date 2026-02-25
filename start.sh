#!/bin/bash
# Start script untuk marketplace-front-end-web
# Jalankan: bash start.sh

echo "🚀 Starting Basic Marketplace Front-End..."
echo "📦 Checking dependencies..."

# Install dependencies jika node_modules belum ada
if [ ! -d "node_modules" ]; then
  echo "📥 node_modules tidak ditemukan, installing..."
  npm install
else
  echo "✅ Dependencies sudah ada"
fi

echo ""
echo "🌐 Dev server berjalan di: http://localhost:5173/marketplace-front-end-web/"
echo "   (Tekan Ctrl+C untuk stop)"
echo ""

npm run dev
