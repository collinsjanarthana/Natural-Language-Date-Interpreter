FROM node:18

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of backend code
COPY . .

# Optional: use .env for config
ENV PORT=4000
EXPOSE 4000

CMD ["node", "server.js"]
