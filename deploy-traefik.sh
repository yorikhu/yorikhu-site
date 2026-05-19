#!/bin/bash
# Deploy script with Traefik

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Enable BuildKit for better caching and --mount support
export DOCKER_BUILDKIT=1

echo -e "${YELLOW}Setting up Traefik network...${NC}"
docker network create traefik-net 2>/dev/null || echo "Network already exists"

echo -e "${YELLOW}Starting Traefik...${NC}"
docker-compose -f "$SCRIPT_DIR/traefik/docker-compose.yml" up -d

echo ""
echo -e "${YELLOW}Starting application...${NC}"
docker-compose -f "$SCRIPT_DIR/docker-compose.traefik.yml" up -d --build

echo ""
echo -e "${GREEN}Deployment complete!${NC}"
echo "  Domains:  yorikhu.com | www.yorikhu.com"
echo "            yorikhu.top | www.yorikhu.top"
echo "  Web:      http://yorikhu.com | http://yorikhu.top"
echo "  API:      http://yorikhu.com/api | http://yorikhu.top/api"
echo ""
echo "Traefik Dashboard: http://localhost:8080 (localhost only)"
