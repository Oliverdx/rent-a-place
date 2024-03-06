import { selector } from "recoil";
import { rentedProperties } from "./atoms";


export const bookingsState = selector({
  key: "bookingsState",
  get: ({ get }) => {
    const bookings = get(rentedProperties);
    return bookings;
  },
});
