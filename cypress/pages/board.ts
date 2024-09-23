import { CardDetail } from "./cardDetail"
import { Page } from "./page"

export class Board extends Page {
	private elements = {
		boardDetail: () => cy.get('[data-cy="board-detail"]'),
		boardTitleInput: () => cy.get('[data-cy="board-title"]'),
		boardTitle: () => cy.get('[data-cy="board-title"]').siblings('div'),
		boardOptions: () => cy.get('[data-cy="board-options"]'),
		deleteBoard: () => cy.get('[data-cy="delete-board"]'),
		addListButton: () => cy.get('[data-cy="create-list"]'),
		newListImput: () => cy.get('[data-cy="add-list-input"]'),
		listSubmitButton: () => cy.get('.grid > div > .py-1'),
		addCardToListButton: () => cy.get('[data-cy="list-name"]').parent().get('[data-cy="new-card"]'),
		listTitle: () => cy.get('[data-cy="list-name"]'),
		newCardInput: () => cy.get('[data-cy="new-card-input"]'),
		submitNewCard: () => cy.contains('Add card'),
		cardByName: (cardName: string) => cy.get('[data-cy="card"]').filter(`:contains("${cardName}")`)
	}
	editName(newName: string) {
		this.elements.boardTitleInput().click().type(newName).blur()
	}
	deleteBoard() {
		this.elements.boardOptions().click()
		this.elements.deleteBoard().click()
	}
	addList(listName: string) {
		this.elements.boardDetail().then(($boardDetail) => {
			if (!$boardDetail.find('[data-cy="add-list-input"]').length) {
				this.elements.addListButton().click()
			}
		})
		this.elements.newListImput().type(listName)
		this.elements.listSubmitButton().click()
	}
	addCard(cardName: string) {
		this.elements.addCardToListButton().click()
		this.elements.newCardInput().type(cardName)
		this.elements.submitNewCard().click()
	}
	openCard(cardName: string): CardDetail {
		this.elements.cardByName(cardName).click();
		return new CardDetail()
	}
	public verifyBoardTitle(title: string) {
		this.elements.boardTitle().should('have.text', title)
	}
	public verifyListInputVisibility() {
		this.elements.newListImput().should('be.visible')
	}
	public verifyLastListTitle(title: string) {
		this.elements.listTitle().last().should('have.value', title)
	}
}