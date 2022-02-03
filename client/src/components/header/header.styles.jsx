import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: whitesmoke;

  @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;

  @media screen and (max-width: 900px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 900px) {
    width: 80%;
    font-size: 16px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    color: cornflowerblue;
  }
`;
