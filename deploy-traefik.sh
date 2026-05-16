#!/bin/bash
# Deploy script with Traefik

cd "$(dirname "$0")"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Setting up Traefik network...${NC}"
docker network create traefik-net 2>/dev/null || echo "Network already exists"

echo -e "${YELLOW}Starting Traefik...${NC}"
cd traefik && docker-compose up -d && cd ..

echo ""
echo -e "${YELLOW}Starting application...${NC}"
docker-compose -f docker-compose.traefik.yml up -d --build

echo ""
echo -e "${GREEN}Deployment complete!${NC}"
echo "  Web:     http://yorikhu.com"
echo "  API:     http://yorikhu.com/api (internally forwarded)"
echo ""
echo "Traefik Dashboard: http://localhost:8080 (localhost only)"
