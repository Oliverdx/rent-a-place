import styled from "styled-components";

export const BookingFormWrapper = styled.div`
  width: 1000px;
  height: auto;
  padding: 20px;
  border-radius: 15px;
  margin: 0 auto;
  background: #FFF;
  color: var(--dark-gray);
`;

export const InputWrapper = styled.div<{ $verticalAlign?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$verticalAlign ? '1fr' : '1fr 1fr'};
  grid-gap: 20px;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const BookButton = styled.button`
  display: block;
  width: 250px;
  height: 40px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  border: 1px solid var(--dark-blue);
  background: var(--dark-blue);
  color: #FFF;
  border-radius: 40px;
  margin: 20px auto;
  transition: ease all 200ms;
  cursor: pointer;

  &:disabled {
    background: #CCC;
    border: 1px solid #CCC;
    cursor: not-allowed;
  }

  &:hover:not(:disabled){
    background: #FFF;
    color: var(--dark-gray);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`;
