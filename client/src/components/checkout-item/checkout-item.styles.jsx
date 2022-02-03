import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  box-shadow: 2px whitesmoke;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px whitesmoke;
  }

  @media screen and (max-width: 900px) {
    width: 22%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 900px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;

    &:hover {
      transform: scale(1.4);
      color: red;
      transition: 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
    }
  }

  @media screen and (max-width: 900px) {
    span {
      margin: 0 4px;
    }
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    color: crimson;
    transition: 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  }
`;
