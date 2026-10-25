# yorikhu-site

个人网站 monorepo：Next.js 前台 + NestJS API，Docker Compose + Nginx 部署。

## 技术栈

| 模块 | 技术 |
|------|------|
| Monorepo | pnpm workspace + Turborepo |
| Web | Next.js 15 / React 19 / TailwindCSS |
| API | NestJS 10 / Swagger |
| 部署 | Docker Compose + Nginx（腾讯云托管 SSL 证书） |

## 目录结构

```
├── apps/
│   ├── web/           # Next.js 前台（:3000）
│   │   └── Dockerfile
│   └── api/           # NestJS API（:5000）
│       └── Dockerfile
├── packages/          # 共享包（预留）
├── nginx/
│   ├── nginx.conf     # 反向代理 + HTTPS 配置
│   └── certs/         # SSL 证书（不入库）
└── docker-compose.yml # nginx + web + api
```

## 本地开发

```bash
pnpm install

pnpm dev        # 同时启动 web + api
pnpm dev:web    # 只启动前端  http://localhost:3000
pnpm dev:api    # 只启动后端  http://localhost:5000（Swagger: /docs）

pnpm build      # 构建全部
pnpm lint       # 检查全部
pnpm clean      # 清理构建产物
pnpm format     # Prettier 格式化
```

## 部署（服务器）

```
Internet
    ↓
┌─────────────────────────────────────┐
│   Nginx (80/443)                    │
│   反向路由 + 腾讯云托管 SSL 证书      │
└─────────────────────────────────────┘
    ↓           ↓
┌──────────┐  ┌──────────┐
│   Web    │  │   API    │
│  :3000   │  │  :5000   │
└──────────┘  └──────────┘
```

### 首次部署

```bash
# 上传仓库到服务器
scp -r . user@server:/path/to/app/

# 放置 SSL 证书（见下方「SSL 证书」），然后构建启动
docker-compose up -d --build
```

### 常用命令

```bash
docker-compose up -d --build   # 启动/更新（重新构建并启动）
docker-compose down            # 停止
docker-compose restart         # 重启
docker-compose logs -f nginx   # 查看日志
docker-compose exec nginx nginx -s reload   # 修改 nginx.conf 后热加载
```

## 域名与路由

已配置域名：`yorikhu.com` / `www.yorikhu.com` / `yorikhu.top` / `www.yorikhu.top`

- `域名/api/*` → API 容器（自动去掉 `/api` 前缀）
- `域名/*`（其余）→ Web 容器
- 域名 HTTP 访问 → 301 跳转 HTTPS
- 服务器 IP 直接访问 → Web 容器（纯 HTTP，IP 无证书）

## SSL 证书（腾讯云托管，90 天自动续期）

证书文件放在 `nginx/certs/`（已在 .gitignore 中，不会入库）：

```bash
# 腾讯云控制台 → SSL 证书 → 下载（Nginx 格式），解压后：
cp xxx.crt nginx/certs/fullchain.pem
cp xxx.key  nginx/certs/privkey.pem
```

- 首次部署：放好证书后 `docker-compose up -d --build`
- 证书续期后：重新下载并覆盖上述两个文件，然后
  `docker-compose exec nginx nginx -s reload`
- 证书未就绪时想先跑通 HTTP：注释掉 `nginx.conf` 中的 443 server 块再启动
- 若每个域名单独签发证书（免费版单域名），按域名拆分多个 443 server
  块并分别指定 `ssl_certificate`

## 故障排查

```bash
# 验证配置语法（改完 nginx.conf 后先跑这个）
docker-compose exec nginx nginx -t

# 查看 Nginx 日志
docker-compose logs -f nginx

# 检查本机路由
curl -H "Host: yorikhu.com" http://localhost/
curl -H "Host: yorikhu.com" http://localhost/api/
```
