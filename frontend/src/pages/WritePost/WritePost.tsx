/* eslint-disable prettier/prettier */
import e from 'express';
import React, { useCallback, useState } from 'react';
import { Button, Input, TextArea } from '../../assets/style';
import { WriteForm } from '../MainPage/style';
import { ButtonContainer, WritePostContainer } from './style';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import axios from 'axios';

export const WritePost = (props: any) => {
  const { data, error, revalidate, mutate } = useSWR('/api/users/user', fetcher, { dedupingInterval: 300000 });

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const { title, content } = post;

  const onChange = useCallback(
    (e: any) => {
      const { value, name } = e.target;
      setPost({ ...post, [name]: value });
    },
    [post]
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      console.log(title);
      console.log(content);

      if (!title || !content) return;

      const variable = {
        writer: data._id,
        title: title,
        content: content,
        filePath: [],
        date: new Date(),
      };

      axios.post('/api/post/uploadPost', variable).then((res) => {
        if (res.data.success) {
          alert('포스트를 성공적으로 작성했습니다.');
          props.history.push('/');
        } else {
          alert('fail to upload Post');
        }
      });
    },
    [post]
  );

  const cancelWritePost = useCallback(() => {
    props.history.push('/');
  }, []);

  if (!data) {
    props.history.push('/login');
  }

  return (
    <WritePostContainer>
      <WriteForm onSubmit={onSubmit}>
        <div className="input_title">
          <Input placeholder="제목을 입력하세요" name="title" onChange={onChange}></Input>
        </div>
        <div>
          <TextArea placeholder="내용을 입력하세요" name="content" onChange={onChange}></TextArea>
        </div>
        <ButtonContainer>
          <Button className="btn write_btn">작성하기</Button>
          <Button className="btn cancel_btn" onClick={cancelWritePost}>
            취소하기
          </Button>
        </ButtonContainer>
      </WriteForm>
    </WritePostContainer>
  );
};
