# Traefik 部署指南

## 架构说明

```
Internet
    ↓
┌─────────────────────────────────────┐
│   Traefik (80/443)                  │
│   自动路由 + SSL 证书                │
└─────────────────────────────────────┘
    ↓           ↓
┌──────────┐  ┌──────────┐
│   Web    │  │   API    │
│  :3000   │  │  :5000   │
└──────────┘  └──────────┘
```

## 部署步骤

### 1. 首次部署（服务器上）

```bash
# 上传所有文件到服务器
scp -r traefik/ docker-compose.traefik.yml deploy-traefik.sh user@server:/path/to/app/

# SSH 登录服务器
ssh user@server

# 进入目录
cd /path/to/app

# 创建空的 acme.json 文件（用于 SSL 证书）
touch traefik/acme.json
chmod 600 traefik/acme.json

# 修改 traefik/docker-compose.yml 中的邮箱
# 将 your-email@example.com 改成你的邮箱

# 运行部署
chmod +x deploy-traefik.sh
./deploy-traefik.sh
```

### 2. 启动/停止服务

```bash
# 启动 Traefik
cd traefik && docker-compose up -d

# 启动应用
docker-compose -f docker-compose.traefik.yml up -d

# 停止应用
docker-compose -f docker-compose.traefik.yml down

# 查看日志
docker-compose -f docker-compose.traefik.yml logs -f
```

### 3. 添加新项目

每个项目只需在 docker-compose.yml 中添加 Traefik 标签：

```yaml
services:
  myservice:
    image: myimage
    networks:
      - traefik-net
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.myproject.rule=Host(`myproject.com`)"
      - "traefik.http.services.myproject.loadbalancer.server.port=3000"
```

## 域名配置

当前配置的域名：
- yorikhu.com
- www.yorikhu.com  
- yorikhu.top
- www.yorikhu.top

路由规则：
- `http://yorikhu.com` → Web 容器
- `http://yorikhu.com/api/*` → API 容器

## Traefik Dashboard

- 地址：`http://服务器IP:8080`
- 只能通过 localhost 访问（生产环境安全）
- 或通过 SSH 隧道：`ssh -L 8080:localhost:8080 user@server`

## SSL/HTTPS 配置

1. 确保域名已解析到服务器 IP
2. 修改 `traefik/docker-compose.yml` 中的邮箱
3. 取消注释 HTTPS 相关的 labels
4. 重启服务

## 对比 Nginx

| 特性 | Traefik | Nginx |
|------|---------|-------|
| 配置文件 | 不需要（用标签） | 需要 nginx.conf |
| 服务发现 | 自动 | 手动 |
| SSL 证书 | 自动 Let's Encrypt | 手动配置 |
| 多项目管理 | 零冲突 | 需要协调配置 |
| 热更新 | 自动 | 需要 reload |

## 故障排查

```bash
# 查看 Traefik 日志
docker logs traefik

# 查看 Traefik Dashboard
docker exec -it traefik traefik dashboard --insecure

# 检查路由配置
curl http://localhost:8080/api/http/routers
```
