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

	it('Creates Private Card with Img', () => {
		const newImgPath = 'cypress/support/files/differentCat.jpeg'
		cy.task('renameFile', { oldPath: 'cypress/support/files/cat.jpeg', newPath: newImgPath })
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
		const cardDetail = board.openCard('First Card')
		cardDetail.verifyCardModalVisibility()
		cardDetail.uploadImage(newImgPath)
		cardDetail.verifyToastVisibility()
		cardDetail.verifyUploadedImageVisibility()
		cy.task('renameFile', { oldPath: newImgPath, newPath: 'cypress/support/files/cat.jpeg' })
	})
	beforeEach(() => {
		cy.request('POST', 'http://localhost:3000/api/reset')
	})
})