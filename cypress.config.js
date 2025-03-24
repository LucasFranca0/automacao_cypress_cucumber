const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = {
    projectId: process.env.CYPRESS_PROJECT_ID,
    e2e: {
        specPattern: '**/*.feature',
        setupNodeEvents(on, config) {
            addCucumberPreprocessorPlugin(on, config);
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));
            return config;
        },
        chromeWebSecurity: false // Os testes estavam falhando por causa do CORS, ficava esperando a resposta do servidor
    }
};
