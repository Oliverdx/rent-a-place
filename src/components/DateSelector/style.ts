import styled from "styled-components";


export const DateSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px 0 0;
`;

export const InputLabel = styled.h2`
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
`;

export const Day = styled.input`
  width: calc(100% - 20px);
  height: 40px;
  padding: 0 10px;
  border: 1px solid var(--dark-gray);
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`;
