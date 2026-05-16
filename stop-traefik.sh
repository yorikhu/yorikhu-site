#!/bin/bash
# Stop Traefik services

cd "$(dirname "$0")"

echo "Stopping application..."
docker-compose -f docker-compose.traefik.yml down

echo "Stopping Traefik..."
cd traefik && docker-compose down

echo "All services stopped."
