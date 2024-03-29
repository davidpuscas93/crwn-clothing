import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 25px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
