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
   npm install cypress@14.2.0
   ```

   ```bash
   npm install @badeball/cypress-cucumber-preprocessor@22.0.1
   ```

   ```bash
   npm install esbuild@0.25.1
   ```

   ```bash
   npm install mochawesome-merge@5.0.0
   ```

## 📦 Gerenciamento de Dependências

### 🔍 Verificar se há novas versões para as dependências

Para verificar se há novas versões disponíveis para as dependências do seu projeto, use o comando:

   ```bash
      npm outdated
   ```
Este comando listará todas as dependências que estão desatualizadas, mostrando a versão atual, a versão desejada e a versão mais recente disponível.

### ⬆️ Atualizar Dependências

Para atualizar uma dependência específica para a versão mais recente, use o comando:

   ```bash
      npm install <nome-da-dependencia>@latest
   ```

Para atualizar todas as dependências desatualizadas para as versões mais recentes, use o comando:

   ```bash
      npm update
   ```

### 📥 Instalar Dependências

Para instalar uma dependência específica, use o comando:

   ```bash
      npm install <nome-da-dependencia>
   ```

Para instalar uma dependência em uma versão específica, use o comando:

   ```bash
      npm install <nome-da-dependencia>@<versão>
   ```

### 📜 Listar Dependências Instaladas

Para listar todas as dependências instaladas no seu projeto, use o comando:

   ```bash
      npm list
   ```

## 🌐 Gerenciamento de Versões do Node.js

Para gerenciar as versões do Node.js, você pode usar o `nvm` (Node Version Manager). Aqui estão alguns comandos úteis:

### 📄 Listar todas as versões do Node.js instaladas

Para listar todas as versões do Node.js instaladas no seu sistema, use o comando:

   ```bash
      nvm ls
   ```

### ⬇️ Instalar uma nova versão do Node.js

Para instalar uma nova versão do Node.js, use o comando:

   ```bash
      nvm install <versão>
   ```

### 🔄 Usar uma versão específica do Node.js

Para usar uma versão específica do Node.js, use o comando:

   ```bash
      nvm use <versão>
   ```

### 🔍 Verificar a versão atual do Node.js

Para verificar a versão atual do Node.js que está sendo usada, use o comando:

   ```bash
      node -v
   ```

### 💡 Exemplo de uso

Aqui está um exemplo de como instalar e usar a versão LTS mais recente do Node.js:

   ```bash
      nvm install --lts
      nvm use --lts
   ```

Certifique-se de ter o `nvm` instalado no seu sistema antes de usar esses comandos.

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
- **Firefox**:
    ```bash
    npm run cypress:headless:firefox
    ```  

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
const {addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');
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
```