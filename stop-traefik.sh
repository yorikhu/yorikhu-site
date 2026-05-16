#!/bin/bash
# Stop Traefik services

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Stopping application..."
docker-compose -f "$SCRIPT_DIR/docker-compose.traefik.yml" down

echo "Stopping Traefik..."
docker-compose -f "$SCRIPT_DIR/traefik/docker-compose.yml" down

echo "All services stopped."
