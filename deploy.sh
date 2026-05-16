#!/bin/bash
# Deploy script for server

cd "$(dirname "$0")"

echo "Building and starting containers..."
docker-compose up -d --build

echo "Waiting for services to be ready..."
sleep 5

echo "Checking services..."
curl -s http://localhost:5000 && echo "✓ API is running"
curl -s http://localhost:3000 > /dev/null && echo "✓ Web is running"

echo ""
echo "Deployment complete!"
echo "  API:     http://localhost:5000"
echo "  Web:     http://localhost:3000"
echo "  Swagger: http://localhost:5000/api"
