### Construção inicial do backend do app teste ###

```

backend-app/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do banco de dados
│   ├── controllers/
│   │   └── taskController.js    # Lógica para as rotas
│   ├── models/
│   │   └── task.js              # Modelo de dados (ORM)
│   ├── routes/
│   │   └── taskRoutes.js        # Rotas da API
│   ├── app.js                   # Configuração principal do Express
│   └── server.js                # Inicialização do servidor
├── docker-compose.yml           # Orquestração dos containers 
├── Dockerfile                   # Dockerfile do backend
├── .gitignore                   # Ignorar arquivos desnecessários
├── package.json                 # Configurações do projeto Node.js
├── README.md                    # Documentação inicial

```