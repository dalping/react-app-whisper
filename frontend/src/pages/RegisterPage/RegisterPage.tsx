import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { Button, Input, Title } from '../../assets/style';
import { ButtonContainer, LoginForm } from '../LoginPage/style';
import { RegisterPageLayout } from './style';

export const RegisterPage = (props: any) => {
  const [info, setInfo] = useState({
    id: '',
    name: '',
    password: '',
    checkPassword: '',
  });

  const { id, name, password, checkPassword } = info;

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      console.log(info);
      if (!id || !password) return;

      const body = {
        email: id,
        name: name,
        password: password,
        profileImage: '',
      };

      axios.post('/api/users/register', body).then(() => {
        alert('성공적으로 회원가입 했습니다.');
        props.history.push('/login');
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

  return (
    <RegisterPageLayout>
      <Title className="title">회원가입</Title>
      <LoginForm onSubmit={onSubmit}>
        <div className="input_id">
          <span>아이디</span>
          <Input name="id" onChange={onChange} />
          {/* <Button>중복확인</Button> */}
        </div>
        <div className="input_nickname">
          <span>닉네임</span>
          <Input name="name" onChange={onChange} />
          {/* <Button>중복확인</Button> */}
        </div>
        <div className="input_password">
          <span>비밀번호</span>
          <Input name="password" type="password" onChange={onChange} />
        </div>
        <div className="input_password_check">
          <span>비밀번호 확인</span>
          <Input name="checkPassword" type="password" onChange={onChange} />
        </div>
        <ButtonContainer>
          <Button className="btn_login google" onClick={onSubmit}>
            가입하기
          </Button>
        </ButtonContainer>
      </LoginForm>
    </RegisterPageLayout>
  );
};
