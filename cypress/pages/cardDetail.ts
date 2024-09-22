import { Page } from "./page"

export class CardDetail extends Page {
	elements = {
		modal: () => cy.get('[data-cy="card-detail"]'),
		carDescription: () => cy.get('[data-cy="card-description"]'),
		imgImput: () => cy.get('#dropzoneFile'),
		notificationToast: () => cy.get('[data-cy="notification-message"]')
	}


}