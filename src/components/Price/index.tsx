import { PriceWrapper, PriceLabel, PriceValue } from "./style";

const Price = ({ noLabel = false, price }: { noLabel?: boolean, price: number }) => {
  return <PriceWrapper data-cy="booking-total-price">
    {!noLabel && <PriceLabel>
      Your stay will cost:
    </PriceLabel>}
    <PriceValue>
      <span>${price}<small>/total</small></span>
    </PriceValue>
  </PriceWrapper >;
};

export default Price;
