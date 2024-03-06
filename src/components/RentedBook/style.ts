import styled from "styled-components";
import { PriceValue } from "../Price/style";

export const RentedBookWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #FFF;
  box-shadow: 0px 0px 4px #CCC;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 15px;

  &.editing{
    border: 2px solid var(--edit-red);
  }

  .edit-label{
    color: var(--edit-red);
    font-weight: bold;
  }

  span{
    margin: 0 0 5px;
  }

  ${PriceValue}{
    margin-top: 20px;
    font-size: 15px;
  }
`;

export const FloatingIcons = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0px;
  width: 80px;
  height: 30px;

  button{
    width: 20px;
    margin: 0 10px;
    padding: 0;
    cursor: pointer;
  }

  img{
    width: 100%;
    height: auto;
  }
`;

export const RentImage = styled.div`
  display: flex;
  height: 150px;
  width: 200px;


  img{
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const Spacer = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--dark-gray);
  margin: 0 0 20px;
`;
