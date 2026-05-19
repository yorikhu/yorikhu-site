import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const { method, originalUrl, ip } = req;

    // 请求日志
    console.log(`[${new Date().toISOString()}] ${method} ${originalUrl} - ${ip}`);

    // 监听响应完成
    res.on('finish', () => {
      const duration = Date.now() - startTime;
      const { statusCode } = res;
      console.log(
        `[${new Date().toISOString()}] ${method} ${originalUrl} - ${statusCode} - ${duration}ms - ${ip}`
      );
    });

    next();
  }
}
