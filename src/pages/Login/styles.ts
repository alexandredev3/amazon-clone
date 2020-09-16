import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #FFF;
`;

export const Logo = styled.div`
  > img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Main = styled.main`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  > h1 {
    font-weight: 400;
    margin-bottom: 20px;
  }

  > p {
    margin-top: 15px;
    font-size: 12px;

    > a {
      &:hover {
        text-decoration: underline;
        color: #f56e38;
      }

      text-decoration: none;
      color: #0066c0;
    }
  }
`;

export const Form = styled.form`

`;

export const LoginSignInButton = styled.button`
  &:hover {
    filter: brightness(0.95);
  }

  transition: filter 150ms;
  border-radius: 2px;
  width: 100%;
  height: 34px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  margin-top: 10px;
  background-image: linear-gradient(#ffe794, #f0c14b);
`;

export const Fieldset = styled.fieldset`
  border: 0;
`;

export const Label = styled.label`
  margin-left: 2px;
  font-size: 13px;
  font-weight: bold;
`;

export const Input = styled.input`
  &:focus {
    border-color: #f58742;
    box-shadow: 0px 0px 4px 1px #f59642;
    background: none;
  }

  transition: all 150ms;
  height: 34px;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 6px;
  background: #FFF;
  width: 98%;
  border: solid 1px rgb(118, 118, 118);
  border-radius: 3px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px;

  > h5 {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 400;
    color: #767676;
  }
`;

export const LoginRegisterButton = styled.button`
  &:hover {
    filter: brightness(0.95);
  }

  transition: filter 150ms;
  max-width: 350px;
  width: 100%;
  margin-top: 10px;
  border-radius: 2px;
  height: 34px;
  border: 1px solid;
  background-image: linear-gradient(#f7f7f7, #e7e9ec);
  border-color: #adb1b8 #a2a6ac #8d9096;
`;
