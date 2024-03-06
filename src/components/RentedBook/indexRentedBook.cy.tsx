// cypress/integration/rentedBook.spec.js

import { RecoilRoot } from "recoil";
import RentedBook from "./index";

describe('RentedBook Component', () => {

  it('renders RentedBook component with RecoilRoot', () => {
    const rent = {
      id: 'mock_rent_id',
      property: {
        type: "house",
        label: "House",
        price: 100,
        icon: "",
        isEditing: false,
      },
      initialDay: '2024-03-10',
      finalDay: '2024-03-15',
      price: 100,
    };

    // Mount the component

    cy.mount(
      <RecoilRoot>
        <RentedBook rent={rent} editProperty={() => { }} deleteProperty={() => { }} />
      </RecoilRoot>
    );

    // Check if the component render
    cy.get('[data-cy=rented-book]').should('exist');

    // Check if the component render with the provided data
    cy.get('[data-cy=rented-book]').within(() => {
      cy.contains('Check-in: 03/10/24').should('exist');
      cy.contains('Check-out: 03/15/24').should('exist');
      cy.contains('100').should('exist');
    });
  });



});
