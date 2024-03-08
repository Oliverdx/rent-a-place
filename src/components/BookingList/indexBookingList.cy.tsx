import { rentedProperties } from '../../recoil/atoms';
import { mockRented } from '../../util/recoilTestMock';
import BookingList from './index'
import { RecoilRoot } from 'recoil';


describe('<BookingList />', () => {

  it('render BookingList component blank', () => {
    cy.mount(
      <RecoilRoot>
        <BookingList />
      </RecoilRoot>
    );
  });

  it('render BookinList with a list of items', () => {

    cy.mount(
      <RecoilRoot initializeState={(snap) => snap.set(rentedProperties, mockRented)}>
        <BookingList />
      </RecoilRoot>
    );

  });

  it('render BookinList and delete one of the itens', () => {

    cy.mount(
      <RecoilRoot initializeState={(snap) => snap.set(rentedProperties, mockRented)}>
        <BookingList />
      </RecoilRoot>
    );

    cy.get('[data-cy=booked-list]').children().first().find('[data-cy=delete-button]').click();

    cy.get('[data-cy=booked-list]').children().should('have.length', 1);

  });

  it('render BookinList and show "Editing" when the user click in the edit button', () => {

    cy.mount(
      <RecoilRoot initializeState={(snap) => snap.set(rentedProperties, mockRented)}>
        <BookingList />
      </RecoilRoot>
    );

    cy.get('[data-cy=booked-list]').children().first().find('[data-cy=edit-button]').click();

    cy.get('[data-cy=booked-list]').children().first().contains('Editing..');

  });
})
