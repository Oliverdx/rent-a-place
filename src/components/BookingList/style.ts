import styled from "styled-components";

export const BookingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  grid-gap: 20px;
  padding: 20px;
`;

export const RentList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1000px;
`;
