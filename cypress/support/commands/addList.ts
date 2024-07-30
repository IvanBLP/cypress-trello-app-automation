import List from '../typings/list'
declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * add a new List to a specific board 
			 * 
			 */
			addList: typeof addList
		}
	}
}

const addList = (body: Pick<List, 'boardId' | 'name' | 'order'>) => {
	return cy.request('POST', '/api/lists', body).its('body')
}

Cypress.Commands.add('addList', addList)