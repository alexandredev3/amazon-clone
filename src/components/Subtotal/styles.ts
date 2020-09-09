import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 10px;
  background: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 4px;

  > button {
    &:hover {
      opacity: .8;
    }

    cursor: pointer;
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border: 1px solid #a88734 #9c7e31 #846a29;
    color: #111;
    transition: opacity 200ms;
  }
`;

export const SubtotalGift = styled.small`
  display: flex;
  align-items: center;

  > input {
    margin-right: 5px;
  }
`;
