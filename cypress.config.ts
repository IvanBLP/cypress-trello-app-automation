import { defineConfig } from "cypress";
import tasks from './cypress/support/tasks/tasks'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
//import {createEsbuildPlugin} from '@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/esbuild'
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

export default defineConfig({
	e2e: {
		async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config)
			on('file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)]
				})
			)

			on('task', tasks)
			// implement more node event lsisteners here
			return config;
		},
		baseUrl: "http://localhost:3000",
		specPattern: [
			"**/*.feature",
			"**/*.spec.cy.ts"
		]
	},
	watchForFileChanges: false
});
