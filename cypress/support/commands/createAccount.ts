import Account from '../typings/account'
declare global {
	namespace Cypress {
		interface Chainable {
			createAccount: typeof createAccount
		}
	}
}

const createAccount = (body: Account) => {
	return cy.request('POST', '/api/signup', body).its('body')
}
Cypress.Commands.add('createAccount', createAccount)