import house from "../icons/house.svg"
import apartment from "../icons/apartment.svg";
import house_bigger from "../icons/house_bigger.svg";
import apartment_bigger from "../icons/apartment_bigger.svg";
import house_biggest from "../icons/house_biggest.svg";
import apartment_biggest from "../icons/apartment_biggest.svg";
import { PropertyType } from "../components/PropertySelector";


export const mockProperties: Array<PropertyType> = [{
  type: "house",
  label: "House",
  price: 100,
  icon: house,
},
{
  type: "house_bigger",
  label: "Bigger House",
  price: 300,
  icon: house_bigger
},
{
  type: "house_biggest",
  label: "Biggest House",
  price: 1000,
  icon: house_biggest
},
{
  type: "apt",
  label: "Apartment",
  price: 70,
  icon: apartment
},
{
  type: "apt_bigger",
  label: "Bigger Apartment",
  price: 150,
  icon: apartment_bigger
},

{
  type: "apt_biggest",
  label: "Biggest Apartment",
  price: 230,
  icon: apartment_biggest
}];

export const BookedImageIcon: { [key: string]: string } =
{
  "house": house,
  "apt": apartment,
  "house_bigger": house_bigger,
  "apt_bigger": apartment_bigger,
  "house_biggest": house_biggest,
  "apt_biggest": apartment_biggest
}
