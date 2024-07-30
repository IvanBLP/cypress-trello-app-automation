import board from '../typings/board'
declare global {
	namespace Cypress {
		interface Chainable {
			deleteBoard(id: number): Chainable
		}
	}
}


Cypress.Commands.add('deleteBoard', (id: number) => {
	return cy.request('POST', `/api/boards${id}`, { id: id }).its('body')
})