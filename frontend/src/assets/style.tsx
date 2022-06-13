import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  height: 100vh;
  overflow: scroll;

  @media screen and (max-width: 1023px) {
    width: 100vw;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: skyblue;
  padding: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px;
  border-bottom: 2px solid black;
  font-size: 1rem;
  box-sizing: border-box;

  width: 250px;

  ::placeholder {
    //text-align: center;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
  font-size: 1rem;
  resize: none;
  box-sizing: border-box;
`;
