import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  min-height: 90vh;
  width: 55%;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalPriceContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
