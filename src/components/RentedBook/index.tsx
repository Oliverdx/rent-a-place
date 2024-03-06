import dayjs from "dayjs";
import { BookedImageIcon } from "../../constants/rentIcons";
import { editBookedProperty, rentedPropertiesType } from "../../recoil/atoms";

import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";

import { RentedBookWrapper, FloatingIcons, RentImage, Spacer } from "./style";

import Price from "../Price";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

interface rentedPropertyType {
  rent: rentedPropertiesType;
  editProperty: (rent: rentedPropertiesType) => void;
  deleteProperty: (rent: number) => void;
}


const RentedBook = ({ rent, editProperty, deleteProperty }: rentedPropertyType) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRentedProperty: rentedPropertiesType = useRecoilValue(editBookedProperty);

  useEffect(() => {
    if (editRentedProperty.id === rent.id)
      setIsEditing(true);
    else
      setIsEditing(false);
  }, [editRentedProperty, rent]);

  const editBooking = () => {
    setIsEditing(true);
    editProperty(rent)
  };


  return (
    <RentedBookWrapper className={isEditing ? "editing" : ""}>
      {isEditing && <span className={isEditing ? "edit-label" : ""}>Editing...</span>}
      <FloatingIcons>
        <button onClick={editBooking}>
          <img src={editIcon} alt="Edit" />
        </button>
        <button onClick={() => deleteProperty(rent.id)}>
          <img src={deleteIcon} alt="Delete" />
        </button>
      </FloatingIcons>
      <RentImage>
        <img src={BookedImageIcon[rent.property.type]} alt={rent.property.label} />
      </RentImage>
      <Spacer />
      <span><b>Check-in:</b> {dayjs(rent.initialDay).format("MM/DD/YY")}</span>
      <span><b>Check-out:</b> {dayjs(rent.finalDay).format("MM/DD/YY")}</span>
      <Price noLabel price={rent.price} />
    </RentedBookWrapper>)
};

export default RentedBook;
