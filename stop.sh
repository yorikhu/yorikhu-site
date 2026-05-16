#!/bin/bash
# Stop all services

cd "$(dirname "$0")"

echo "Stopping containers..."
docker-compose down

echo "Services stopped."
