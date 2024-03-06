import dayjs from 'dayjs';
import { DateSelectorWrapper, InputLabel, Day } from './style';
import { useEffect, useState } from 'react';

interface DateSelectorProps {
  type?: string;
  selectDay: (date: string) => void;
  selectedDay?: string;
}


const DateSelector = ({ type, selectDay, selectedDay = "" }: DateSelectorProps) => {

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setSelected(selectedDay);
  }, [selectedDay]);


  const handleSelectDate = (date: string) => {
    setSelected(date);
    selectDay(date);
  }

  return <DateSelectorWrapper>
    <InputLabel>{type === 'initial' ? 'Check-in:' : 'Check-out:'}</InputLabel>
    <Day
      type='date'
      min={dayjs().format('YYYY-MM-DD')}
      value={selected}
      onChange={((e) => handleSelectDate(e.target.value))}
    />
  </DateSelectorWrapper>
};

export default DateSelector;
