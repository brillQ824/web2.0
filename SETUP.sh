#!/bin/bash

# Alioth Group Website - Setup Script
echo "🚀 Setting up Alioth Group Website..."

# Fix npm cache permissions if needed
echo "📦 Checking npm cache permissions..."
if [ ! -w "$HOME/.npm" ]; then
    echo "⚠️  Fixing npm cache permissions..."
    sudo chown -R $(id -u):$(id -g) "$HOME/.npm"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "⚙️  Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "✅ Created .env.local - Please fill in your environment variables"
fi

# Create placeholder directories
echo "📁 Creating placeholder directories..."
mkdir -p public/placeholders

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env.local and add your environment variables"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Documentation:"
echo "- README.md - Setup and usage guide"
echo "- DEPLOYMENT.md - Deployment instructions"
echo "- PROJECT_SUMMARY.md - Complete project overview"
echo ""
echo "🎉 Happy coding!"

