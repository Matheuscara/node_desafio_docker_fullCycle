## Desafio Full Cycle Docker - Nginx, Node.js e MySQL

# Descrição do Desafio

Este projeto foi desenvolvido como parte de um desafio no Full Cycle Development Course. O objetivo era criar uma aplicação usando Docker que integra um servidor Nginx como proxy reverso, uma aplicação Node.js e um banco de dados MySQL. A aplicação Node.js adiciona um registro em um banco de dados MySQL cada vez que é acessada através do Nginx, e retorna uma lista desses registros.

# Funcionalidades

Nginx como Proxy Reverso: Direciona as requisições para a aplicação Node.js.
Aplicação Node.js: Adiciona nomes ao banco de dados MySQL e retorna uma lista de nomes cadastrados.
MySQL: Armazena os nomes enviados pela aplicação Node.js.
Adição de Nomes via POST: Permite a adição de novos nomes ao banco de dados através de uma requisição POST.

# Adicionando Nomes

Para adicionar um nome ao banco de dados, envie uma requisição POST para /add com um corpo JSON contendo o nome. Por exemplo, usando cURL:

# Tecnologias Utilizadas

- Docker e Docker Compose
- Nginx
- Node.js
- MySQL

# Imagem docker ub

https://hub.docker.com/repository/docker/diasdedev/docker_node_nginx_fullcycle/general