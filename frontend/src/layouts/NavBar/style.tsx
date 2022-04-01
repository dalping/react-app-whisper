import styled from 'styled-components';

export const NavLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: skyblue;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavRight = styled.div``;
export const NavLeft = styled.div`
  display: flex;
  gap: 10px;

  span {
    cursor: pointer;
  }
`;
