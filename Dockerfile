# Imagem base
FROM node:16

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY package*.json ./
RUN npm install

COPY . .

# Porta da aplicação
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]