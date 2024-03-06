// cypress/integration/rentedBook.spec.js

import { RecoilRoot } from "recoil";
import PropertySelector from "./index";
import { mockProperties } from "../../constants/rentIcons";

describe('PropertySelector Component', () => {

  it('renders PropertySelector component', () => {

    // Mount the component

    cy.mount(
      <RecoilRoot>
        <PropertySelector selectedProperty="" selectProperty={() => { }} />
      </RecoilRoot>
    );

    // Check if the component render
    cy.get('[data-cy=rented-book-list]').should('exist');

    // Check if the component render with the provided data
    cy.get('[data-cy=rented-book-list]').within(() => {
      cy.get('[data-cy=property-selector]').should('exist');
      cy.get('[data-cy=rented-book-icon]').should('exist');
      cy.get('[data-cy=rented-book-title]').should('exist');

    });
  });

  it('renders all mockProperties', () => {

    cy.mount(
      <RecoilRoot>
        <PropertySelector selectedProperty="" selectProperty={() => { }} />
      </RecoilRoot>
    );

    mockProperties.forEach((property) => {
      cy.get('[data-cy=property-selector]').contains(property.label).should('exist');
    });

  });

  it('Renders all mockProperties only with "House" as selected property ', () => {

    cy.mount(<PropertySelector selectedProperty="house" selectProperty={() => { }} />);

    // Ensure "House" is active and others are not
    mockProperties.forEach((property) => {
      cy.get(`[data-cy=property-selector]:contains(${property.label})`)
        .should(property.type === 'house' ? 'have.class' : 'not.have.class', 'active');
    });

  });


});
