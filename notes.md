- Instalei a lib nodemon pq ele vai escutar toda vez que eu mudar as rotas e vai dar um live reload
    - npm install nodemon 

- Para instalar o framework Express:
    - npm install express@4.17.3

- Tive que adicionar "type": "module" no package.json pra indicar que é JS do tipo module e então poder importar e exportar funções e constantes.


- Aqui no curso iremos construir nossa aplicação completa, do zero, mas existe uma ferramenta chamada Express Application Generator que já cria um “esqueleto” para aplicações Express. A instalação é realizada via NPM (Node Package Manager ou seja, o Gerenciador de Pacotes do Node). Pode-se usar o parâmetro -g para instalar o pacote globalmente, ou seja, você pode acessá-lo de qualquer lugar do computador:
    - npm install express-generator -g

- Vou usar o POSTMAN para testar as requisicoes do meu CRUD

- Vou usar o MongoDB como banco de dados para guardar as informações que eu quiser adicionar pelas requisicoes API

- Vou usar a lib Mongoose para fazer a ligacao do banco de dados MongoDB e o Node(Express)
    - npm install mongoose@6.2.6
    - A conexao vai ser feita dentro de dbConnect.js
