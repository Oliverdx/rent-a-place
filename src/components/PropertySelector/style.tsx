import styled from 'styled-components';

export const PropertySelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 0 auto;
`;

export const PropertyButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 115px;
  padding: 5px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 0 5px #DDD;
  cursor: pointer;

  &.active{
    border: 2px solid var(--dark-blue);
  }

`;

export const PropertyImage = styled.img`
  width: 70px;
  height: auto;
  object-fit: contain;
`;
