import Account from "cypress/support/typings/account"
import { HomePage } from "./homePage"
import { Page } from "./page"

export class Signup extends Page {
	private elements = {
		emailImput: () => cy.get('[data-cy="signup-email"]'),
		passwordImput: () => cy.get('[data-cy="signup-password"]'),
		sendEmailCheckBox: () => cy.get('[name="welcomeEmail"]'),
		signupSubmitButton: () => cy.get('[data-cy="signup-submit"]'),
		loginLink: () => cy.get('[href="/login"]')
	}
	public createAccount(accountInfo: Account): HomePage {
		this.elements.emailImput().type(accountInfo.username)
		this.elements.passwordImput().type(accountInfo.password)
		if (accountInfo.sendEmailWelcomeEmail) this.elements.sendEmailCheckBox().check()
		this.elements.signupSubmitButton().click()
		return new HomePage()
	}

}