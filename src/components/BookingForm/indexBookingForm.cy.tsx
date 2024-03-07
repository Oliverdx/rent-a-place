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
})
