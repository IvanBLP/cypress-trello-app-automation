import { defineConfig } from "cypress";
import tasks from './cypress/support/tasks/tasks'

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on('task', tasks)
			// implement more node event listeners here
		},
		baseUrl: "http://localhost:3000"
	},
});
