import { Page } from "./page"
import { Board } from "./board"
import { Login } from "./login"

export class HomePage extends Page {
	private elements = {
		firstBoardInput: () => cy.get('[data-cy="first-board"]'),
		newBoardInput: () => cy.get('[data-cy="create-board"]'),
		emptyStateHeader: () => cy.contains('Get started!'),
		loginButton: () => cy.get('[data-cy="login-menu"]'),
		boardByName: (boardName: string) => cy.get('[data-cy="board-item"]').filter(`:contains("${boardName}")`)
	}

	public visit() {
		cy.visit('/')
	}

	public goToLogin(): Login {
		this.elements.loginButton().click()
		return new Login()
	}
	public createFirstBoard(name: string): Board {
		cy.log('Creating First Board')
		this.elements.firstBoardInput().type(name + "{enter}")
		return new Board()
	}
	public createBoard(name: string): Board {
		cy.log('Creating New Board')
		this.elements.newBoardInput().click()
		cy.get('[data-cy="new-board-input"]').should('be.visible').type(`${name}{enter}`)
		return new Board()
	}

	public openBoard(board: string): Board {
		this.elements.boardByName(board).click()
		return new Board()
	}

	public validateBoardVisibility(board: string) {
		this.elements.boardByName(board).should('be.visible')
	}
}