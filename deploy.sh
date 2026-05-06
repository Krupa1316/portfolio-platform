#!/bin/bash

# Portfolio Platform Deployment Script

echo "🚀 Building and deploying portfolio platform..."

# Build and start containers
docker compose up -d --build

echo "✅ Deployment complete!"
echo "📍 Access app at: http://localhost:3005"
echo ""
echo "📊 Running containers:"
docker ps --filter name=portfolio

echo ""
echo "View logs:"
echo "  docker compose logs -f portfolio"
