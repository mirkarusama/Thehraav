# ---- 1. Build the static site ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# SITE_URL (optional) overrides the address in src/config/site.ts, e.g. when you add a custom domain.
ARG SITE_URL
ENV SITE_URL=$SITE_URL
RUN npm run build

# ---- 2. Serve it with Caddy (tiny, ~15-20 MB RAM) ----
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
# Railway sets $PORT; Caddy listens on it (defaults to 8080 locally).
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
