FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install && \
    npm install -D tailwindcss postcss autoprefixer && \
    npm install react-router-dom react-icons

COPY tailwind.config.js ./
COPY postcss.config.js ./
# COPY vite.config.js ./

COPY src/ ./src/
# COPY public/ ./public/
COPY index.html ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
