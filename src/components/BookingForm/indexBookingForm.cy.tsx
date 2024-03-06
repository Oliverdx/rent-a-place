import React from 'react'
import BookingForm from './index'

describe('<BookingForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BookingForm />)
  })
})