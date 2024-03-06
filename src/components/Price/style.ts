import styled from "styled-components";

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PriceLabel = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px 0 0;
`;

export const PriceValue = styled.div`
  display: block;
  font-size: 25px;
  font-weight: bold;

  small{
    font-size: 13px;
  }
`;
