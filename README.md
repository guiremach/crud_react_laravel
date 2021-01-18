
<h2>Etapas de configuração</h2>

Vá até um respositório de sua escolha e digite 
````
$ git clone https://github.com/guiremach/crud_react_laravel.git
````
````
$ cd backend
````
````
#instale as dependências usando composer
$ composer install
````
````
#renomeie .env.example para .env e configure seu banco de dados
````
````
#Crie o seu banco de dados no servidor mySQL
CREATE DATABASE `laravel`; // ou outro banco cfe configurado acima
````
````
#gere uma chave 
$ php artisan key:generate
````
````
$ php artisan migrate:fresh
````
````
$ php artisan serve
````
````
````
````
# Em outro bash(DOS), execute o yarn install para configurção e o yarn start para inciar a aplicação.
````
````
$ cd frontend

$ yarn install
````
````
$ yarn start

