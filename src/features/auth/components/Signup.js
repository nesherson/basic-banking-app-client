import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SignupForm from './SignupForm';
import img from '../../../assets/images/arch2.jpg';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const ImageWrapper = styled.section`
  width: 540px;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FormWrapper = styled.section`
  flex-grow: 1;
  padding: 5em 7em;
`;

const Header = styled.h1`
  margin-bottom: 2.75em;
  color: #1e3e60;
  font-size: 1.55rem;
`;

const SubHeader = styled.h3`
  font-weight: 400;
  color: #1e3e60;
`;

const SignupDescription = styled.p`
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

function Signup() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <FormWrapper>
        <Header>Register</Header>
        <SubHeader>Manage your bank accounts efficiently</SubHeader>
        <SignupDescription>
          Let's get you all set up so you can verify your personal account and
          begin setting up your profile.
        </SignupDescription>
        <SignupForm />
        <Text>
          Already have an account? <Link to='#'>Log in</Link>
        </Text>
      </FormWrapper>
    </Container>
  );
}

export default Signup;
