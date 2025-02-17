FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install && \
    npm install -D tailwindcss postcss autoprefixer && \
    npm install --save react-router-dom@6.22.3 react-icons@5.0.1

COPY tailwind.config.js ./
COPY postcss.config.js ./

COPY src/ ./src/

COPY assets/ ./assets/

COPY index.html ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
