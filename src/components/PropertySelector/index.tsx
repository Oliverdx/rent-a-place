import { useEffect, useState } from "react";
import { mockProperties } from "../../constants/rentIcons";

import {
  PropertySelectorWrapper,
  PropertyButton,
  PropertyImage
} from "./style";

export interface PropertyType {
  type: string;
  label: string;
  price: number;
  icon: string;
  isEditing: boolean
}

interface PropertySelectorProps {
  selectedProperty: string;
  selectProperty: (property: PropertyType) => void;
}

const PropertySelector = ({ selectedProperty, selectProperty }: PropertySelectorProps) => {

  const [selectedItem, setSelected] = useState(selectedProperty);

  useEffect(() => {
    setSelected(selectedProperty);
  }, [selectedProperty]);

  const propertyHandler = (item: string) => {
    const selected = mockProperties.find((property) => item === property.type);

    if (selected) {
      selectProperty(selected);
    }

  }

  return <PropertySelectorWrapper data-cy="rented-book-list">
    {mockProperties.map((property) => {

      return <PropertyButton
        key={property.type.toLocaleLowerCase()}
        className={`${selectedItem === property.type ? "active" : ""}`}
        onClick={() => propertyHandler(property.type)}
        data-cy="property-selector"
      >
        <PropertyImage data-cy="rented-book-icon" src={property.icon} />
        <span data-cy="rented-book-title">{property.label}</span>
      </PropertyButton>
    })}

  </PropertySelectorWrapper>
};

export default PropertySelector;
