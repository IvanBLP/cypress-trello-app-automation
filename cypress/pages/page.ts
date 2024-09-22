import { HomePage } from "./homePage";

export abstract class Page {
	private commonElements = {
		trelloLogo: () => cy.get('[data-cy="trello-logo"]'),
		loginMenu: () => cy.get('[data-cy="login-menu"]'),
		loggedUser: () => cy.get('[data-cy="logged-user"]')
	}
	public clickTrelloLogo(): HomePage {
		this.commonElements.trelloLogo().click()
		return new HomePage()
	}
	public validateLoginState(loggedIn: boolean) {
		if (loggedIn) {
			this.commonElements.loggedUser().should('be.visible')
			//this.commonElements.loggedUser().should('be.visible', { log: false })
		} else { this.commonElements.loginMenu().should('be.visible') }
	}

}