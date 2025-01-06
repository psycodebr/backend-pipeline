# Imagem base
FROM node:16

# Diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos de configuração do npm
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Porta da aplicação
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "start"]
