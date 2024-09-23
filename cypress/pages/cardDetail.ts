import { Page } from "./page"

export class CardDetail extends Page {
	private elements = {
		modal: () => cy.get('[data-cy="card-detail"]'),
		carDescription: () => cy.get('[data-cy="card-description"]'),
		imgImput: () => cy.get('#dropzoneFile'),
		notificationToast: () => cy.get('[data-cy="notification-message"]'),
		uploadedImage: () => cy.get('[data-cy="image-attachment"]')
	}
	public uploadImage(imgPath: string) {
		this.elements.imgImput().selectFile(imgPath, { force: true })
	}
	public verifyToastVisibility() {
		this.elements.notificationToast().should('be.visible')
	}
	public verifyCardModalVisibility() {
		this.elements.modal().should('be.visible')
	}
	public verifyUploadedImageVisibility() {
		this.elements.modal().should('be.visible')
	}

}