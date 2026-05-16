#!/bin/bash
# Deploy script for server

cd "$(dirname "$0")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Stop existing containers
echo "Stopping existing containers..."
docker-compose down 2>/dev/null

# Build and start
echo ""
echo "Building and starting containers..."
docker-compose up -d --build

# Wait for services to be ready
echo ""
echo "Waiting for services to be ready..."
sleep 10

# Check services
echo ""
echo "Checking services..."

if docker ps | grep -q "_api_" ; then
    echo -e "${GREEN}✓ API is running${NC}"
else
    echo -e "${RED}✗ API failed to start${NC}"
fi

if docker ps | grep -q "_web_" ; then
    echo -e "${GREEN}✓ Web is running${NC}"
else
    echo -e "${RED}✗ Web failed to start${NC}"
fi

if docker ps | grep -q "_nginx_" ; then
    echo -e "${GREEN}✓ Nginx is running${NC}"
else
    echo -e "${RED}✗ Nginx failed to start${NC}"
fi

echo ""
echo -e "${GREEN}Deployment complete!${NC}"
echo "  Web:     http://yorikhu.com"
echo "  (API is accessible internally via /api/*)"
echo ""
echo "Check logs with: docker-compose logs -f"
