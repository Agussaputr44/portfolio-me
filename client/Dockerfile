# === STAGE 1: Build React/Vite App ===
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json dulu biar caching layer docker optimal
COPY package.json package-lock.json ./ 
RUN npm install

# Copy semua source code
COPY . .

# Build production (hasilnya ada di folder /dist)
RUN npm run build

# === STAGE 2: Serve dengan Nginx ===
FROM nginx:alpine

# Copy hasil build dari Stage 1 ke folder HTML Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy konfigurasi Nginx custom (agar React Router aman saat direfresh)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]