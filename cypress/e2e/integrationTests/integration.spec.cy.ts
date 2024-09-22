import { HomePage } from "cypress/pages/homePage"


describe('IntegrationTests', () => {
	it('Create/Open Public Board- FAILS', () => {
		const home = new HomePage()
		home.visit()
		const firstBoard = home.createFirstBoard('failing First Test')
		cy.url().should('include', '/board/1')
		firstBoard.verifyBoardTitle('failing First Test')
		firstBoard.verifyListInputVisibility()
		const newHomePage = firstBoard.clickTrelloLogo()
		newHomePage.validateBoardVisibility('failing First Test')
		const newBoard = newHomePage.openBoard('failing First Test')
		newBoard.verifyListInputVisibility()
	})
	it('Create Public Lists', () => {
		const home = new HomePage()
		home.visit()
		const firstBoard = home.createFirstBoard('first Board POM')
		cy.url().should('include', '/board/1')
		firstBoard.verifyBoardTitle('first Board POM')
		firstBoard.verifyListInputVisibility()
		const newHomePage = firstBoard.clickTrelloLogo()
		newHomePage.validateBoardVisibility('first Board POM')
		const newBoard = newHomePage.openBoard('first Board POM')
		newBoard.addList('First List Tittle')
		newBoard.verifyLastListTitle('First List Tittle')
		newBoard.addList('Second List Tittle')
		newBoard.verifyLastListTitle('Second List Tittle')
	})

	it.only('Creates Private Card with Img', () => {
		const accountInfo = {
			email: 'first@account.com',
			password: 'test1',
			welcomeEmail: false
		}
		cy.createAccount(accountInfo)
		const home = new HomePage()
		home.visit()
		const loginPage = home.goToLogin()
		const newHome = loginPage.login(accountInfo)
		newHome.validateLoginState(true)
		const board = newHome.createFirstBoard('First Private Board')
		board.addList('First List')
		board.addCard('First Card')
	})
	beforeEach(() => {
		cy.request('POST', 'http://localhost:3000/api/reset')
	})
})

describe.skip('Card actions', () => {

	it('Create Card', () => {
		//TO DOs:
		//1. cannot enforce type of oldPath and newPath here but cypress catches the error`\_(o.O)_/´
		//2. detemine what happens if oldPath is not there, currently test throws error 
		cy.task('renameFile', { oldPath: 'cypress/support/files/cat.jpeg', newPath: 'cypress/support/files/differentCat.jpeg' })
		cy.addBoard({ name: 'New Board' })
		cy.addList({ boardId: 1, name: 'firstList', order: 0 })
		// board.visit(1)
		// board.addCard('firstCardName')
		// card.elements.modal().should('be.visible')
		// card.elements.imgImput().selectFile('cypress/support/files/differentCat.jpeg', { force: true })
		// card.elements.notificationToast().should('be.visible')
	})
	//it('',()=>{})
	afterEach(() => {
		//cy.request('POST', 'http://localhost:3000/api/reset')
		//cy.deleteBoard(1)
	})
})


// describe('Login/signup', () => {

// })