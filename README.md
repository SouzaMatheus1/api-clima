# Aplicação Web de Clima (Node.js)

Uma aplicação web simples para buscar dados de clima, desenvolvida em Node.js. Este projeto foi criado com o intuito de demonstrar habilidades em desenvolvimento backend, validação de dados, integração com APIs externas e armazenamento de logs de requisições em um banco de dados NoSQL.

### Funcionalidades

  * Busca de dados de clima em tempo real por nome de cidade.
  * Registro automático de cada requisição em um log persistente no **Firestore**.
  * Validação de dados de entrada usando **Joi**.
  * Formatação de dados para uma resposta limpa e organizada.
  * Tratamento de erros e respostas claras para requisições inválidas ou cidades não encontradas.

### Tecnologias

  * **Node.js**: Ambiente de execução.
  * **Express.js**: Framework web para a construção da aplicação.
  * **Firestore**: Banco de dados NoSQL do Firebase para o log de requisições.
  * **Axios**: Cliente HTTP para a requisição à API de clima externa (OpenWeatherMap).
  * **Joi**: Biblioteca para validação de esquemas de dados.
  * **dotenv**: Para gerenciar variáveis de ambiente de forma segura.
  * **ejs**: Para gerar páginas HTML de forma dinâmica.
  * **csv-parser e fs**: Para ler e transferir os dados do CSV para o sistema.

### Como Executar Localmente

Siga os passos abaixo para clonar e rodar o projeto em sua máquina.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/SouzaMatheus1/api-clima.git
    cd api-clima
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione suas chaves de API. Você precisará de uma chave da [OpenWeatherMap](https://openweathermap.org/api) e das credenciais do seu projeto no [Firebase](https://console.firebase.google.com/).

    ```env
    # Chave da API de Clima (OpenWeatherMap)
    API_KEY=sua_chave_da_openweathermap
    BASE_URL=https://api.openweathermap.org/data/2.5/weather

    # Credenciais do Projeto Firebase
    API_KEY_FIREBASE=
    AUTH_DOMAIN=
    PROJECT_ID=
    STORAGE_BUCKET=
    MESSAGING_SENDER_ID=
    APP_ID=

    # Credenciais do Firestore
    FIREBASE_SERVICE_ACCOUNT=
    ```

4.  **Inicie o servidor:**

    ```bash
    node public/index.js
    ```

    O servidor estará rodando em `http://localhost:8080`.

5  **Caso queira testar a conexão com o db:**

    ```bash
    node app/database/pingDb.js
    ```

### Endpoints da Aplicação

A aplicação possui as seguintes rotas:

#### `GET /`

  * **Descrição:** Renderiza a página inicial com um formulário para selecionar uma cidade.
  * **Exemplo de Requisição:**
    ```
    http://localhost:8080/
    ```

#### `GET /clima`

  * **Descrição:** Busca os dados de clima para uma cidade específica e renderiza a página com os resultados.
  * **Parâmetros de Query:**
      * `cidade` (obrigatório): O nome da cidade.
  * **Exemplo de Requisição:**
    ```
    http://localhost:8080/clima?cidade=Sao Paulo
    ```
  * **Resposta:** Renderiza uma página HTML com os dados do clima.

#### `GET /csv`

  * **Descrição:** Retorna os dados das cidades e países do arquivo CSV em formato JSON.
  * **Exemplo de Requisição:**
    ```
    http://localhost:8080/csv
    ```
  * **Exemplo de Resposta (JSON):**
    ```json
    {
      "cidades": ["São Paulo", "Rio de Janeiro", ...],
      "pais": ["Brazil", "Brazil", ...]
    }
    ```

### Autor

  * **Matheus de Souza** - [GitHub](https://github.com/SouzaMatheus1)

### Licença

Este projeto está licenciado sob a licença MIT.