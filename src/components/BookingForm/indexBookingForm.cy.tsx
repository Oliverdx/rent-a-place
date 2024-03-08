import BookingForm from './index'
import { RecoilRoot } from 'recoil'

describe('<BookingForm />', () => {
  it('should render Booking form component correctly', () => {

    cy.mount(
      <RecoilRoot>
        <BookingForm />
      </RecoilRoot>
    )
  });


  it('should enable the button when all the fields are filled ', () => {

    cy.mount(
      <RecoilRoot>
        <BookingForm />
      </RecoilRoot>
    )

    cy.get('[data-cy=input-initial-day]').type('2024-03-01');
    cy.get('[data-cy=input-final-day]').type('2024-03-07');
    cy.get('[data-cy=rented-book-list]').children("[data-cy=property-selector-house]").click()


    cy.get('[data-cy=schedule-btn]').not('have.attr', 'disabled').click();
  });



})
