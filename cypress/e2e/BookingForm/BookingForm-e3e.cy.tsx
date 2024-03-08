describe('End-to-End Test', () => {
  it('should successfully schedule a property', () => {
    // Visit the website or application
    cy.visit('http://localhost:5173'); // Replace 'your_website_url' with the actual URL

    // Check if has no rented book
    cy.get('[data-cy=rented-book]').should('not.exist');

    // Start to book the first rent
    // Input the initial and final day of the booking
    cy.get('[data-cy=input-initial-day]').type('2024-03-08');
    cy.get('[data-cy=input-final-day]').type('2024-03-10');

    // Select the property "House"
    cy.get('[data-cy=property-selector-house]').click();

    // Check if the property "House" is selected
    cy.get('[data-cy=property-selector-house]').should('have.class', 'active');

    // Check if the price show up after select the necessary fields 
    cy.get('[data-cy=booking-total-price]').should('exist');

    // Check if the schedule button is enabled
    cy.get('[data-cy=schedule-btn]').should('not.be.disabled');

    // Click the schedule button
    cy.get('[data-cy=schedule-btn]').click();

    // Check if was added a new rented
    cy.get('[data-cy=rented-book]').should('exist');

  });
});
