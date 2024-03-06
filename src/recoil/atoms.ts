import { atom } from "recoil";
import { PropertyType } from "../components/PropertySelector";

export interface rentedPropertiesType {
  id: string,
  property: PropertyType,
  initialDay: string,
  finalDay: string,
  price: number,
}

export const editBookedProperty = atom({
  key: "editBookedProperty",
  default: {} as rentedPropertiesType,
});


export const rentedProperties = atom({
  key: "rentedProperties",
  default: [] as rentedPropertiesType[],
});
