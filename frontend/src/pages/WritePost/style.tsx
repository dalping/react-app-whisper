import styled from 'styled-components';

export const WritePostContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;

  .input_title {
    input {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  .cancel_btn {
    background-color: #ff8282;
  }
`;
