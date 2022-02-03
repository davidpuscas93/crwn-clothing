import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;
