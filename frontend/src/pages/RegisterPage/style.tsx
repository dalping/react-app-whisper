import styled from 'styled-components';

export const RegisterPageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
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

export const RegisterForm = styled.form`
  display: flex;
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
