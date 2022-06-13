/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Input, Title } from '../../assets/style';
import { ButtonContainer, LoginForm, LoginPageLayout } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

export const LoginPage = (props: any) => {
  const REST_API_KEY = '00fa60e1114d18d560973b564b34dcb8';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  //http://localhost:3000/oauth/kakao/callback?code=WhnXYOpD0nsYPJ3ccI6d3OmkqhH40dWGy_wlPY1wLc9jmXTPZfWpiABwqkVkJHqqrMvW6Qo9dNkAAAF__ZNwIA
  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const { data, error, revalidate, mutate } = useSWR('/api/users/user', fetcher, { dedupingInterval: 300000 });

  const { email, password } = info;

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!email || !password) return;

      //가입된 사용자 확인
      const request = axios
        .post('/api/users/login', info, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.loginSuccess) {
            revalidate();
            props.history.push('/');
          } else {
            alert(res.data.message);
          }
        });
    },
    [info]
  );

  const onChange = useCallback(
    (e: any) => {
      const { value, name } = e.target;
      setInfo({ ...info, [name]: value });
    },
    [info]
  );

  if (data) {
    props.history.push('/');
  }

  return (
    <LoginPageLayout>
      <Title className="title">로그인</Title>
      <LoginForm onSubmit={onSubmit}>
        <div className="input_id">
          <span>아이디</span>
          <Input name="email" onChange={onChange} />
          {/* <Button>중복확인</Button> */}
        </div>
        <div className="input_password">
          <span>비밀번호</span>
          <Input name="password" type="password" onChange={onChange} />
        </div>
        <ButtonContainer>
          <Button className="btn_login">로그인</Button>
          {/* <img src="images/kakao_login_medium_narrow.png" /> */}

          <Button className="btn_login google">구글로 로그인</Button>

          <Link to="/register">
            <span className="btn_login makeId">계정이 없으신가요?</span>
          </Link>
        </ButtonContainer>
      </LoginForm>
      {/* <a href={KAKAO_AUTH_URL}>
        <div>
          <Button className="btn_login kakao">카카오로 로그인</Button>
        </div>
      </a> */}
    </LoginPageLayout>
  );
};
