import { HomePage } from "./homePage"
import { Page } from "./page"
import Account from '../support/typings/account'

export class Login extends Page {
	private elements = {
		emailImput: () => cy.get('[data-cy="login-email"]'),
		passwordImput: () => cy.get('[data-cy="login-password"]'),
		loginSubmitButton: () => cy.get('[data-cy="login-submit"]'),
		signUpLink: () => cy.get('[href="/signup"]')
	}
	public login(loginInformation: Omit<Account, 'welcomeEmail'>): HomePage {
		this.elements.emailImput().type(loginInformation.email)
		this.elements.passwordImput().type(loginInformation.password)
		this.elements.loginSubmitButton().click()
		return new HomePage()
	}
}