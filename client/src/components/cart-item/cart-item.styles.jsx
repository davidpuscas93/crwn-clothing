import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`

export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: center;
  padding: 10px 20px;
  width: 70%;
`;

export const ItemNameContainer = styled.span`
  font-size: 16px;
`

export const ItemPriceContainer = styled.span`
  font-size: 16px;
`
