# Stage 1: Build Angular app
FROM node:18 AS build

WORKDIR /app
COPY . .

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli@19.2.0
RUN npm install

# Build with production config (uses environment.prod.ts)
RUN ng build --configuration production

# Stage 2: Serve app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Optional: Add custom nginx.conf if needed
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
