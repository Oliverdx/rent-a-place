import { rentedPropertiesType } from "../recoil/atoms";


export const mockRented = [{
  id: "1",
  property: {
    type: "house",
    label: "House",
    price: 100,
    icon: "",
  },
  initialDay: "2024-01-02",
  finalDay: "2024-01-03",
  price: 100,

},
{
  id: "2",
  property: {
    type: "apt_bigger",
    label: "Bigger Apartment",
    price: 150,
    icon: "",
  },
  initialDay: "2024-02-01",
  finalDay: "2024-03-01",
  price: 1500
}] as rentedPropertiesType[]
