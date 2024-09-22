import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import board from 'cypress/pages/board'

Given('the user created a board', () => {
	cy.addBoard({ name: 'new board' })
})

Given('the user created a list', () => {
	cy.addList({ boardId: 1, name: "new list", order: 1 })
	board.visit(1)
})

When('the user creates a card', () => {
	board.addCard('first card')
})

Then('the new card is displayed in the list', () => {
	board.elements.card().should('be.visible')
})


//('',()=>{})

// Feature: Card Actions
// Scenario: Creating new card
// Given the user created a board
// And the user created a list
// When the user creates a card
// Then the card modal is displayed
// Scenario: Completing card
// Given the card modal is displayed
// When the user completes the card
// // Then the description is saved
// And the image is saved