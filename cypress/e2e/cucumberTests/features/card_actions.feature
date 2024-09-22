Feature: Card Actions
	@skip
	Scenario: Creating new card
		Given the user created a board
		And the user created a list
		When the user creates a card
		Then the new card is displayed in the list
