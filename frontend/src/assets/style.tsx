import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  height: 100%;

  @media screen and (max-width: 1023px) {
    width: 100vw;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
