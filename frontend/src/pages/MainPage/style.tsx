import styled from 'styled-components';

export const MainPageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
`;

export const WriteForm = styled.form`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* 
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  .btn_login {
    width: 100%;
  }

  .makeId {
    font-size: 0.8rem;
    text-align: center;
    font-style: oblique;
    cursor: pointer;
  }
`;
