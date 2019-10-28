# Backend MeetApp

Backend do MeetApp, desenvolvido em Nodejs com o framework Express.

## Instalação

Há duas formas de executar o backend, sendo elas listadas abaixo.

Mas antes de escolher uma das opções, você deve renomear o arquivo `.env.example` para `.env` e configurar as variáveis de acordo.

**1 - Via Docker**

No arquivo `.env`, configurar os parâmetros como descrito abaixo:

    DB_DIALECT=postgres
    DB_HOST=postgresqldb
    DB_DATABASE=meetapp
    DB_USER=meetapp
    DB_PASS=meetapp
    DB_PORT=5432

**OBS:** _Caso saiba o que está fazendo, fique à vontade para modificar os parâmetros acima, lembrando de modificar também o arquivo `docker-compose.yml`._

Já possuindo o Docker instalado, execute o seguinte comando:

    docker-compose up -d

**2 - Local**

Execute os seguintes comandos:

    npm install
    npm run dev

Após executar, o acesso ao backend pode ser feito pela url `http://localhost:3333`
