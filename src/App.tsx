import React from 'react';
import { Title } from './style';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';


const App: React.FC = () => {

  return (
    <div>
      <Title>Hello! Let's book your next rental !</Title>
      <BookingForm />
      <BookingList />
    </div>
  );
};

export default App;
