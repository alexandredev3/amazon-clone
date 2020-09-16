import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../services/firebase';

import { 
  Container, 
  Logo, 
  Main, 
  Form,
  LoginSignInButton,
  LoginRegisterButton,
  RegisterContainer,
  Fieldset,
  Label,
  Input
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  /**
   * we can get the input values this way.
   * in the "OnChange" of the input we put the function "handleInputChange", 
   * and we have to remove the "value" property from the input.
   */
  // const [inputData, setInputData] = useState({
  //   email: '',
  //   password: ''
  // });

  // function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = event.target;

  //   setInputData({ ...inputData, [name]: value })
  // }


  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await auth
        .signInWithEmailAndPassword(email.trim(), password.trim());

      if (response) {
        history.push('/');
      }
    } catch(err) {
      alert(err);
    }
  }

  async function handleGoToPageRegister() {
    try {
      const response = await auth
        .createUserWithEmailAndPassword(email, password);

      if (response) {
        history.push('/');
      }
      console.log(response);
    } catch(err) {
      alert(`${err}`);
    }
  }

  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo"/>
        </Logo>
      </Link>

      <Main>
        <h1>Sign-In</h1>

        <Form onSubmit={handleSignIn}>
          <Fieldset>
            <Label htmlFor="email">E-mail</Label>
            <Input 
              name="email"
              maxLength={50} 
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Label htmlFor="password">Password</Label>
            <Input 
              name="password"
              maxLength={50}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Fieldset>

          <LoginSignInButton>
            Sign In
          </LoginSignInButton>
        </Form>

        <p>
          This site is not really Amazon, this site is just a clone of Amazon.
          Do not put your crendecias for real, because that is just a clone.
          if you want to go to Amazon go to this link <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com">amazon.com</a>.
        </p>

      </Main>

      <RegisterContainer>
        <h5>New to Amazon?</h5>
        <LoginRegisterButton onClick={handleGoToPageRegister}>
              Create your amazon account
        </LoginRegisterButton>
      </RegisterContainer>

    </Container>
  );
};

export default Login;
