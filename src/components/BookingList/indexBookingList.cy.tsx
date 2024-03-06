import BookingList from './index'
import { RecoilRoot } from 'recoil';


describe('<BookingList />', () => {

  it('rendrenders BookingList component', () => {
    cy.mount(
      <RecoilRoot>
        <BookingList />
      </RecoilRoot>
    )
  })


})
