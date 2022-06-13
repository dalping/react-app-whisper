/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../assets/style';
import { NavContainer, NavLayout, NavLeft, NavRight, ProfileImg } from './style';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import axios from 'axios';
import gravatar from 'gravatar';

export const NavBar = (props: any) => {
  const { data, error, revalidate, mutate } = useSWR('/api/users/user', fetcher, {
    dedupingInterval: 300000,
  });

  console.log(data);

  const BeforeLogin = () => (
    <NavLeft>
      <Link to="/login">
        <span>Login</span>
      </Link>
      <Link to="/register">
        <span>Register</span>
      </Link>
    </NavLeft>
  );

  const AfterLogin = () => (
    <NavLeft>
      <Link to="/mypage">
        <span>MyPage</span>
      </Link>
      <div onClick={onLogout}>
        <span>Logout</span>
      </div>
      <ProfileImg>
        <img
          src={data.profileImage ? data.profileImage : gravatar.url(data.email, { s: '36px', d: 'retro' })}
          alt={data.name}
        />
      </ProfileImg>
    </NavLeft>
  );

  const onLogout = useCallback((e: any) => {
    e.preventDefault();
    // eslint-disable-next-line prettier/prettier
    axios.get('/api/users/logout').then((res) => {
      alert('로그아웃 되었습니다.');
      mutate(false);
      //console.log(props.history);
      //props.history.push('/home');
    });
  }, []);

  return (
    <NavLayout>
      <NavContainer>
        <NavRight>
          <Link to="/">
            <Title>Pettlog</Title>
          </Link>
        </NavRight>
        {data ? AfterLogin() : BeforeLogin()}
      </NavContainer>
    </NavLayout>
  );
};
