import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 240px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 120px auto;
`;
