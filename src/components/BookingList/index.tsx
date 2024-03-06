import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { bookingsState } from '../../recoil/selectors';
import { BookingListWrapper, RentList } from './style';
import { Subtitle } from '../../style';
import RentedBook from '../RentedBook';
import { editBookedProperty, rentedProperties, rentedPropertiesType } from '../../recoil/atoms';

const BookingList: React.FC = () => {
  const rents: rentedPropertiesType[] = useRecoilValue(bookingsState);
  const setBookingList = useSetRecoilState(rentedProperties);
  const setEditBooking = useSetRecoilState(editBookedProperty);

  const editProperty = (rent: rentedPropertiesType) => {
    setEditBooking(rent);
  };

  const deleteProperty = (id: string) => {
    const newBookedRents = rents.filter(rent => rent.id !== id);
    setBookingList(newBookedRents);
  };


  return (
    <BookingListWrapper>
      <Subtitle>Your Booked Rents</Subtitle>
      <RentList >
        {rents?.length > 0 && rents.map(rent => (
          <RentedBook
            key={rent.id}
            rent={rent}
            editProperty={editProperty}
            deleteProperty={deleteProperty}
          />
        ))}
      </RentList>
    </BookingListWrapper>
  );
};

export default BookingList;
