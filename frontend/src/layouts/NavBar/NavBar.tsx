import React from 'react';
import { Title } from '../../assets/style';
import { NavContainer, NavLayout, NavLeft, NavRight } from './style';

export const NavBar = () => {
  return (
    <NavLayout>
      <NavContainer>
        <NavRight>
          <Title>Bucket</Title>
        </NavRight>
        <NavLeft>
          <span>Login</span>
          <span>Register</span>
        </NavLeft>
      </NavContainer>
    </NavLayout>
  );
};
