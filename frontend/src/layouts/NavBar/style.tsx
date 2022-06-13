import styled from 'styled-components';

export const NavLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  background-color: skyblue;
  z-index: 100;
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

  div,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: pink;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
