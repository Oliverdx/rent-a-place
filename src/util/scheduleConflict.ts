import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

import { rentedPropertiesType } from "../recoil/atoms";

interface BookingDates {
  initialDay: string;
  finalDay: string;
}

function hasScheduleConflict(newBooking: BookingDates, bookedSchedules: rentedPropertiesType[]) {
  const newInitialDay = dayjs(newBooking.initialDay);
  const newFinalDay = dayjs(newBooking.finalDay);

  for (const bookedSchedule of bookedSchedules) {
    const bookedInitialDay = dayjs(bookedSchedule.initialDay);
    const bookedFinalDay = dayjs(bookedSchedule.finalDay);

    if (
      (newInitialDay.isBetween(bookedInitialDay, bookedFinalDay) ||
        newFinalDay.isBetween(bookedInitialDay, bookedFinalDay) ||
        (newInitialDay.isBefore(bookedInitialDay) && newFinalDay.isAfter(bookedFinalDay)))
    ) {
      return true; // Conflict found
    }
  }

  return false; // No conflicts found
}

export default hasScheduleConflict;
