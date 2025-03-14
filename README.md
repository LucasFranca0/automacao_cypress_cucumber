# 🚀 Automação Cypress Cucumber

Projeto para testar automação de testes com Cypress utilizando Cucumber para descrever as features.

## 📋 Descrição

Este projeto utiliza Cypress para automação de testes end-to-end. Ele inclui testes para verificar a funcionalidade de login e navegação em uma aplicação web.

## 🛠️ Pré-requisitos

- Node.js (versão 20)
- npm

## 📦 Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/LucasFranca0/cypress_project.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd cypress_project
    ```
3. Instale as dependências:
    ```bash
    npm ci
    ```

## 🚀 Executando os Testes

### 🔍 Abrir Cypress no modo interativo

Para abrir o Cypress no modo interativo, execute:
```bash
npm run cypress:web
```

### 🏃 Executar testes no modo headless

Para executar os testes no modo headless em diferentes navegadores, use os seguintes comandos:

- **Chrome**:
    ```bash
    npm run cypress:headless:chrome
    ```

- **Electron**:
    ```bash
    npm run cypress:headless:electron
    ```

- **Edge**:
    ```bash
    npm run cypress:headless:edge
    ```
  **Observação**: O Firefox não estava funcionando corretamente, então não foi incluído nos testes. Pois estava dando erro de CORS e não tem suporte ao chromeWebSecurity.

## 📂 Estrutura do Projeto

- `cypress/e2e/`: Contém os arquivos de teste `.feature`.
- `cypress/support/pageObjects/`: Contém os objetos de página utilizados nos testes.
- `cypress/support/step_definitions/`: Contém as definições dos passos dos testes.
- `cypress.config.js`: Configuração do Cypress.
- `.github/workflows/ci.yml`: Configuração do CI para executar os testes no GitHub Actions.

## ⚙️ Configuração do Cypress

O arquivo `cypress.config.js` contém a configuração do Cypress, incluindo a desativação da segurança da web para evitar problemas de CORS:

```javascript
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = {
    e2e: {
        setupNodeEvents(on, config) {
            addCucumberPreprocessorPlugin(on, config);
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));
            return config;
        },
        specPattern: 'cypress/e2e/**/*.feature',
        chromeWebSecurity: false // Os testes estavam falhando por causa do CORS, ficava esperando a resposta do servidor
    }
};
```

## 🔄 Configuração do CI

O arquivo `.github/workflows/ci.yml` configura o GitHub Actions para executar os testes em diferentes navegadores:

```yaml
name: Cypress CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run-chrome:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Verify Cypress cache
        run: npx cypress cache list

      - name: Run Cypress tests on Chrome
        run: npx cypress run --browser chrome

  cypress-run-electron:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Verify Cypress cache
        run: npx cypress cache list

      - name: Run Cypress tests on Electron
        run: npx cypress run --browser electron

  cypress-run-edge:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Verify Cypress cache
        run: npx cypress cache list

      - name: Run Cypress tests on Edge
        run: npx cypress run --browser edge
```

## 📄 Arquivos do Cypress e suas funções

1. **`cypress.config.js`**:
   - Este arquivo contém a configuração do Cypress, como o padrão de especificação dos testes, configurações de segurança, e plugins utilizados.
   - Exemplo:
     ```javascript
     const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
     const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
     const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

     module.exports = {
         e2e: {
             setupNodeEvents(on, config) {
                 addCucumberPreprocessorPlugin(on, config);
                 on('file:preprocessor', createBundler({
                     plugins: [createEsbuildPlugin(config)],
                 }));
                 return config;
             },
             specPattern: 'cypress/e2e/**/*.feature',
             chromeWebSecurity: false
         }
     };
     ```

2. **`package.json`**:
   - Este arquivo define as dependências do projeto, scripts de execução e outras informações do projeto.
   - Exemplo:
     ```json
     {
       "name": "cypress_project",
       "version": "1.0.0",
       "main": "cypress.config.js",
       "scripts": {
         "cypress:web": "npx cypress open",
         "cypress:headless:chrome": "npx cypress run --browser chrome",
         "cypress:headless:electron": "npx cypress run --browser electron",
         "cypress:headless:edge": "npx cypress run --browser edge"
       },
       "devDependencies": {
         "@badeball/cypress-cucumber-preprocessor": "^20.1.2",
         "@bahmutov/cypress-esbuild-preprocessor": "^2.2.4",
         "cypress": "^13.17.0",
         "esbuild": "^0.19.11"
       }
     }
     ```

3. **`package-lock.json`**:
   - Este arquivo é gerado automaticamente e garante que as versões exatas das dependências sejam instaladas, proporcionando consistência entre diferentes instalações.


4. **`cypress/e2e/`**:
   - Diretório que contém os arquivos de teste `.feature` escritos em Gherkin, descrevendo os cenários de teste.


5. **`cypress/support/pageObjects/`**:
   - Diretório que contém os objetos de página utilizados nos testes, encapsulando a lógica de interação com a interface do usuário.


6. **`cypress/support/step_definitions/`**:
   - Diretório que contém as definições dos passos dos testes, ligando os cenários escritos em Gherkin com o código de teste.


7. **`.github/workflows/ci.yml`**:
   - Arquivo de configuração do GitHub Actions para executar os testes em diferentes navegadores em um ambiente de integração contínua (CI).
   - Exemplo:
     ```yaml
     name: Cypress CI

     on:
       push:
         branches:
           - main
       pull_request:
         branches:
           - main

     jobs:
       cypress-run-chrome:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout repository
             uses: actions/checkout@v3

           - name: Set up Node.js
             uses: actions/setup-node@v3
             with:
               node-version: '20'
               cache: 'npm'

           - name: Install dependencies
             run: npm ci

           - name: Verify Cypress cache
             run: npx cypress cache list

           - name: Run Cypress tests on Chrome
             run: npx cypress run --browser chrome
     ```