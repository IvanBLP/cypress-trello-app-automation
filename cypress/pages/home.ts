class HomePage {
	elements = {
		firstBoardInput: () => cy.get('[data-cy="first-board"]'),
		newBoardInput: () => cy.get('[data-cy="create-board"]'),
		emptyStateHeader: () => cy.contains('Get started!')
	}
	visit() {
		cy.visit('/')
	}

	//methods below should not use string as input, but Board.name
	createFirstBoard(name: string) {
		cy.log('Creating First Board')
		this.elements.firstBoardInput().type(name + "{enter}")
	}
	createBoard(name: string) {
		cy.log('Creating New Board')
		this.elements.newBoardInput().click()
		cy.get('[data-cy="new-board-input"]').should('be.visible').type(`${name}{enter}`)
	}
}

export default new HomePage()