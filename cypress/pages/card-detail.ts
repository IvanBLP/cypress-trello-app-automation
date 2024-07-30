class Card {
	elements = {
		modal: () => cy.get('[data-cy="card-detail"]'),
		carDescription: () => cy.get('[data-cy="card-description"]'),
		imgImput: () => cy.get('#dropzoneFile'),
		notificationToas: () => cy.get('[data-cy="notification-message"]')
	}


}

export default new Card()