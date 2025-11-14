# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Expor porta e iniciar app
EXPOSE 3000
CMD ["node", "index.js"]
