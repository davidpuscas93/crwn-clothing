import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 22vw;
  height: 350px;

  &:hover {
    .collection-item-image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 900px) {
    width: 40vw;

    &:hover {
      .collection-item-image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  margin-bottom: 5px;
  box-shadow: 2px 2px whitesmoke;
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  height: 5%;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;

  @media screen and (max-width: 900px) {
    width: 30%;
  }
`;

export const AddButton = styled(CustomButton)`
  display: none;
  position: absolute;
  width: 80%;
  top: 255px;
  opacity: 0.7;

  @media screen and (max-width: 900px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
