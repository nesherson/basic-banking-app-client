import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import LoginForm from './LoginForm';
import Logo from './Logo';
import img from '../../../assets/images/loginImg.jpg';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const ImageWrapper = styled.section`
  width: 1080px;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FormWrapper = styled.section`
  flex-grow: 1;
  padding: 2.5em 7em;
`;

const Header = styled.h1`
  margin-bottom: 2.75em;
  margin-top: 2.95em;
  color: #1e3e60;
  font-size: 1.55rem;
`;

const SubHeader = styled.h3`
  font-weight: 400;
  color: #1e3e60;
`;

const LoginDescription = styled.p`
  font-size: 0.9rem;
  color: #667d94;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #0070ff;
`;

const Text = styled.p`
  margin: 1.5em 0;
  font-size: 0.98rem;
  color: #1e3e60;
`;

function Login() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <FormWrapper>
        <Logo colorLight='#1e3e60' colorDark='#18324e' />
        <Header>Login</Header>
        <SubHeader>Login to your account</SubHeader>
        <LoginDescription>
          Thank you for getting back to Basic Bank, let's sign you in.
        </LoginDescription>
        <LoginForm />
        <Text>
          Don't have an account yet? <Link to='/signup'>Join Basic Bank</Link>
        </Text>
      </FormWrapper>
    </Container>
  );
}

export default Login;
