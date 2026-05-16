#!/bin/bash
# Restart all services

cd "$(dirname "$0")"

echo "Restarting containers..."
docker-compose restart

echo "Waiting for services..."
sleep 5

echo "Services restarted."
