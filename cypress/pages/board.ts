class Board {
	elements = {
		boardTitleInput: () => cy.get('[data-cy="board-title"]'),
		boardTitle: () => cy.get('[data-cy="board-title"]').siblings('div'),
		boardOptions: () => cy.get('[data-cy="board-options"]'),
		deleteBoard: () => cy.get('[data-cy="delete-board"]'),
		newListImput: () => cy.get('[data-cy="add-list-input"]'),
		addListButton: () => cy.get('.grid > div > .py-1'),
		listTittle: () => cy.get('[data-cy="list-name"]'),
		addAnotherCardButton: () => cy.get('[data-cy="new-card"]'),
		newCardInput: () => cy.get('[data-cy="new-card-input"]'),
		submitNewCard: () => cy.contains('Add card'),
		card: () => cy.get('[data-cy="card"]')

	}
	//change imput to Board.id
	visit(boardId: number) {
		cy.visit(`/board/${boardId}`)
	}

	editName(newName: string) {
		this.elements.boardTitleInput().click().type(newName).blur()
	}
	deleteBoard() {
		this.elements.boardOptions().click()
		this.elements.deleteBoard().click()
	}
	addList(listName: string) {
		this.elements.newListImput().type(listName)
		this.elements.addListButton().click()
	}
	addCard(cardName: string) {
		this.elements.addAnotherCardButton().click()
		this.elements.newCardInput().type(cardName)
		this.elements.submitNewCard().click()
		this.elements.card().click()
	}

}


export default new Board();