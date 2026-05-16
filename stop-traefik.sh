#!/bin/bash
# Stop Traefik services

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Stopping application...${NC}"
docker-compose -f "$SCRIPT_DIR/docker-compose.traefik.yml" down

echo -e "${YELLOW}Stopping Traefik...${NC}"
docker-compose -f "$SCRIPT_DIR/traefik/docker-compose.yml" down

# Check if containers are stopped
echo ""
echo -e "${YELLOW}Checking services...${NC}"

if docker ps | grep -q "yorikhu-site-web"; then
    echo -e "${RED}✗ Web still running${NC}"
else
    echo -e "${GREEN}✓ Web stopped${NC}"
fi

if docker ps | grep -q "yorikhu-site-api"; then
    echo -e "${RED}✗ API still running${NC}"
else
    echo -e "${GREEN}✓ API stopped${NC}"
fi

if docker ps | grep -q "traefik"; then
    echo -e "${RED}✗ Traefik still running${NC}"
else
    echo -e "${GREEN}✓ Traefik stopped${NC}"
fi

echo ""
echo -e "${GREEN}All services stopped.${NC}"
