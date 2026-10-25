# Web Dockerfile - Next.js standalone mode for smaller images
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# corepack 会读取 package.json 中的 packageManager 字段
RUN corepack enable
RUN corepack prepare pnpm@10.4.0 --activate

FROM base AS build
WORKDIR /app

# 1. 先复制依赖定义文件（利用层缓存）
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 2. 安装依赖（只有依赖变化时才重新运行）
RUN pnpm install --frozen-lockfile --shamefully-hoist

# 3. 再复制源代码（代码变化不影响依赖安装层）
COPY packages packages/
COPY apps/web apps/web/

# 4. 构建（生成 standalone 输出）
RUN cd apps/web && pnpm install --frozen-lockfile --prefer-offline && pnpm run build

FROM base AS prod
WORKDIR /app
# 只复制 standalone 必需的文件
# monorepo 结构：standalone 下有 apps/web/server.js
COPY --from=build /app/apps/web/.next/standalone/apps/web ./apps/web
COPY --from=build /app/apps/web/.next/standalone/node_modules ./node_modules
COPY --from=build /app/apps/web/.next/standalone/package.json ./package.json
# .next 需要放在 apps/web 下，因为 server.js 的 dir 是 /app/apps/web
COPY --from=build /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /app/apps/web/public ./apps/web/public

EXPOSE 3000

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/web/server.js"]
