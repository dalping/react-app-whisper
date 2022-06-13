import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  img {
    width: 100%;
  }

  .delete_btn {
    display: flex;
    gap: 5px;
    position: absolute;
    top: 10px;
    right: 10px;

    span {
      cursor: pointer;

      &:first-child {
        color: #6b6bff;
      }

      &:nth-child(2) {
        color: #ff6868;
      }
    }
  }
`;
