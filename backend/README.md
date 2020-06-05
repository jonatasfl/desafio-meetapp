# Backend MeetApp

Backend do MeetApp, desenvolvido em Nodejs com o framework Express.

## Requisitos

- **Para instalação via Docker**
  - Docker e Docker Compose
- **Para instalação local**
  - Nodejs 11 ou superior
  - PostgreSQL 9 ou superior

## Instalação

Há duas formas de executar o backend, sendo elas listadas abaixo.

Mas antes de escolher uma das opções, você deve renomear o arquivo `.env.example` para `.env` e configurar as variáveis de acordo.

**Opção 1 - Via Docker**

Esta é a melhor opção, pois já monta todo o ambiente (servidor NodeJs e banco PostgreSQL) com apenas um comando.

No arquivo `.env`, configurar os parâmetros como descrito abaixo:

    DB_DIALECT=postgres
    DB_HOST=postgresqldb
    DB_DATABASE=meetapp
    DB_USER=meetapp
    DB_PASS=meetapp
    DB_PORT=5432

**OBS:** _Caso saiba o que está fazendo, fique à vontade para modificar os parâmetros acima, lembrando de modificar também o arquivo `docker-compose.yml`._

Já possuindo o Docker instalado, execute o seguinte comando para iniciar os containers:

    docker-compose up -d

Acesse o container da aplicação e execute as migrations e seeds:

    docker exec -it meetapp_server_nodejs sh
    npm run sequelize db:migrate
    npm run sequelize db:seed:all

**Opção 2 - Instalação local**

Modifique o arquivo `.env` com os parâmetros de conexão com o banco.

Execute os seguintes comandos:

    npm install
    npm run sequelize db:migrate
    npm run sequelize db:seed:all
    npm run dev

Após executar, o acesso ao backend pode ser feito pela url `http://localhost:3333`
