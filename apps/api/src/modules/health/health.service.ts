import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      service: 'yorikhu-api',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
