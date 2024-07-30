import Board from '../typings/board'
declare global {
	namespace Cypress {
		interface Chainable {
			addBoard(body: Pick<Board, 'name'>): Chainable
		}
	}
}


Cypress.Commands.add('addBoard', (body: Pick<Board, 'name'>) => {
	return cy.request('POST', '/api/boards', body).its('body')
})