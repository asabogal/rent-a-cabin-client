import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>
        <h1>Rent-A-Cabin</h1>
      </Title>
      <Navigation>
        <h3>Listings</h3>
        <h3>Users</h3>
        <h3>Log In</h3>
        <h3>Sign Up</h3>
      </Navigation>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    padding: 5px;
    cursor: pointer;
  }
`;