#!/bin/bash
# Restart Traefik services

cd "$(dirname "$0")"

echo "Restarting services..."
docker-compose -f docker-compose.traefik.yml restart

echo "Services restarted."
echo "Note: Traefik itself doesn't need restart for config updates"
