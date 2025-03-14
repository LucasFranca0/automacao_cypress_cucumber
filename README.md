## Descrição
Este projeto utiliza [Cypress](https://www.cypress.io/) para testes automatizados de front-end do projeto [sauce demo](https://www.saucedemo.com/) e [api reqres](https://reqres.in/), com suporte para Cucumber.

### Dependências do projeto
- `cypress`: ^14.1.0
- `cypress-cucumber-preprocessor`: ^4.3.1

## Scripts
- `cypress:headless`: Executa os testes no modo headless usando o navegador Chrome.
- `cypress:web`: Abre a interface do Cypress para execução dos testes.

## Configuração
1. Instale as dependências:
   ```sh
   npm install

2. Execute os testes:
   ```sh
   npm run cypress:headless
   ```
   ou
   ```sh
   npm run cypress:web
   ```