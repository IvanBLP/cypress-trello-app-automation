import home from '../pages/home'
import board from '../pages/board'
import card from '../pages/card-detail'

describe('Board Actions', () => {

	it('Create 1st board', () => {
		home.visit();
		home.createFirstBoard('first Board POM')
		cy.url().should('include', '/board/1')
		board.elements.boardTitle().should('have.text', 'first Board POM')
		board.elements.newListImput().should('be.visible')
	})
	it('Create 2nd board', () => {
		cy.addBoard({ name: '1st board' })
		home.visit();
		home.createBoard('Second Board')
		cy.url().should('include', '/board/2')
		board.elements.boardTitle().should('have.text', 'Second Board')
		board.elements.newListImput().should('be.visible')
	})
	it('Rename a Board', () => {
		cy.addBoard({ name: 'new Board' })
		board.visit(1)
		board.editName('edited Board Name')
		board.elements.boardTitle().should('have.text', 'edited Board Name')
	})
	it('Delete Board', () => {
		cy.addBoard({ name: 'Board to Delete' })
		board.visit(1)
		board.deleteBoard()
		cy.url().should('not.include', '/board/1')
		home.elements.emptyStateHeader().should('be.visible')

	})
	afterEach(() => {
		cy.request('POST', 'http://localhost:3000/api/reset')

	})
})

describe('List actions', () => {
	it('Create Lists', () => {
		cy.addBoard({ name: 'New Board' })
		board.visit(1)
		board.addList('First List Title')
		board.elements.listTittle().should('have.value', 'First List Title')
		board.addList('Second List Title')
		board.elements.listTittle().last().should('have.value', 'Second List Title')
	})
	afterEach(() => {
		cy.request('POST', 'http://localhost:3000/api/reset')
		//cy.deleteBoard(1)
	})
})
describe('Card actions', () => {
	beforeEach(() => {
		cy.request('POST', 'http://localhost:3000/api/reset')
	})
	it.only('Create Card', () => {
		//TO DOs:
		//1. cannot enforce type of oldPath and newPath here but cypress catches the error`\_(o.O)_/´
		//2. detemine what happens if oldPath is not there, currently test throws error 
		cy.task('renameFile', { oldPath: 'cypress/support/files/cat.jpeg', newPath: 'cypress/support/files/differentCat.jpeg' })
		cy.addBoard({ name: 'New Board' })
		cy.addList({ boardId: 1, name: 'firstList', order: 0 })
		board.visit(1)
		board.addCard('firstCardName')
		card.elements.modal().should('be.visible')
		card.elements.imgImput().selectFile('cypress/support/files/differentCat.jpeg', { force: true })
		card.elements.notificationToas().should('be.visible')
	})
	//it('',()=>{})
	afterEach(() => {
		//cy.request('POST', 'http://localhost:3000/api/reset')
		//cy.deleteBoard(1)
	})
})


// describe('Login/signup', () => {

// })