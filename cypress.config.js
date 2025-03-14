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
