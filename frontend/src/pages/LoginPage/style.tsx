import styled from 'styled-components';

export const LoginPageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    padding: 30px;
  }

  .btn_login {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  .btn_login {
    width: 100%;
  }

  .kakao {
    background-color: #fbe300;
  }

  .google {
    background-color: #ff8888;
  }

  .makeId {
    font-size: 0.8rem;
    text-align: center;
    font-style: oblique;
    cursor: pointer;
  }
`;
