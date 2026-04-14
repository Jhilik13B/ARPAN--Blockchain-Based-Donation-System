FROM node:18

WORKDIR /app

COPY . .

# Install backend deps
RUN npm install

# Go to frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]