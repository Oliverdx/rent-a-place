import React, { useEffect, useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { editBookedProperty, rentedProperties, rentedPropertiesType } from '../../recoil/atoms';

import DateSelector from '../DateSelector';
import Price from '../Price';
import PropertySelector, { PropertyType } from '../PropertySelector';

import {
  BookButton,
  BookingFormWrapper,
  InputWrapper,
  ErrorMessage
} from './style';



const BookingForm: React.FC = () => {
  const [initialDay, setInitialDay] = useState<string>();
  const [finalDay, setFinalDay] = useState<string>();
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState<string>();
  const [property, setProperty] = useState<PropertyType>({} as PropertyType);
  const [editing, setEditing] = useState(false);

  const editRentedProperty: rentedPropertiesType = useRecoilValue(editBookedProperty);
  const setBookingList = useSetRecoilState(rentedProperties);
  const resetEditing = useResetRecoilState(editBookedProperty);

  useLayoutEffect(() => {
    if ((initialDay && finalDay))
      setPrice(dayjs(finalDay).diff(dayjs(initialDay), 'day') * property.price);

  }, [initialDay, finalDay, property]);

  useEffect(() => {

    if (Object.keys(editRentedProperty).length > 0) {
      setInitialDay(editRentedProperty.initialDay);
      setFinalDay(editRentedProperty.finalDay);
      setPrice(editRentedProperty.price);
      setProperty({ ...editRentedProperty.property, isEditing: true });
      setEditing(true);
    }

  }, [editRentedProperty]);

  const cleanForm = () => {
    setInitialDay('');
    setFinalDay('');
    setPrice(0);
    setProperty({} as PropertyType);
  };

  const handleBooking = () => {

    setBookingList((oldBookedProperties) => {

      const bookedId = editing ? editRentedProperty.id : Math.random().toString(36);
      const rentedBook = {
        id: bookedId,
        property: property as PropertyType,
        initialDay: initialDay as string,
        finalDay: finalDay as string,
        price: price as number,
      };

      if (Object.keys(editRentedProperty).length === 0) {
        return [rentedBook, ...oldBookedProperties];
      } else {
        const replaceIndex = oldBookedProperties.findIndex(property => property.id === rentedBook.id);
        const newBookedProperties = [...oldBookedProperties];
        newBookedProperties.splice(replaceIndex, 1, rentedBook);
        newBookedProperties.sort();

        return newBookedProperties;
      }

    });

    setEditing(false);
    resetEditing();
    cleanForm();
  };

  const validateDate = (value: string, type: string) => {

    if (dayjs(value).isSame(dayjs(initialDay)) || dayjs(value).isSame(dayjs(finalDay))) {
      setError('The dates should not be at same day');
      return;
    } else {
      if (type === 'initial') {
        if (finalDay && dayjs(value).isAfter(dayjs(finalDay))) {
          setError('The initial date must be before the final date');
          setPrice(0);
          return;
        } else {
          setInitialDay(value);
        }
      } else {
        if (initialDay && dayjs(value).isBefore(dayjs(initialDay))) {
          setError('The final date must be after the initial date');
          setPrice(0);
          return;
        } else {
          setFinalDay(value);
        }
      }
    }

    setError('');
  };

  const handleSelectedProperty = (property: PropertyType) => {
    setProperty(property);
  };

  const validateData = !!(property?.type !== "" && initialDay && finalDay) && price > 0;

  return (
    <BookingFormWrapper>
      <InputWrapper>
        <DateSelector
          selectDay={(date => validateDate(date, 'initial'))}
          type={'initial'}
          selectedDay={initialDay}
        />
        <DateSelector
          selectDay={(date => validateDate(date, 'final'))}
          type={'final'}
          selectedDay={finalDay}
        />
      </InputWrapper>
      <InputWrapper $verticalAlign={true}>
        <PropertySelector
          selectedProperty={property.type}
          selectProperty={handleSelectedProperty}
        />
        {(validateData && price) &&
          <Price price={price} />}
      </InputWrapper>

      <BookButton
        disabled={!validateData}
        onClick={handleBooking}>
        Schedule now
      </BookButton>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </BookingFormWrapper>
  );
};

export default BookingForm;
