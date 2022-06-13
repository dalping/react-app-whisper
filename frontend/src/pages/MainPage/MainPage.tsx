import React, { useEffect, useState } from 'react';
import { Container } from '../../assets/style';
import { MainPageContainer } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { Post } from '../../components/Post/Post';

export const MainPage = (props: any) => {
  // eslint-disable-next-line prettier/prettier
  const { data, error, revalidate, mutate } = useSWR('/api/users/user', fetcher, { dedupingInterval: 300000 });
  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    console.log('메인페이지');
    getPosts();
  }, []);

  useEffect(() => {
    console.log(PostList);
  }, [PostList]);
  const getPosts = () => {
    // setLoading(false);

    // const variable = {
    //   skip: Page,
    //   userId: null,
    // };

    // eslint-disable-next-line prettier/prettier
    axios.post('/api/post/getPost', {}).then((res) => {
      if (res.data.success) {
        const newData = res.data.posts;
        // if (newData.length !== 0) {
        setPostList(PostList.concat(newData));
        //   setLoading(true);
        //   setPage(Page + 1);
        // } else {
        //   //더이상 포스트가 없음
        //   setLoading(false);
        // }
      } else {
        alert('fail to load Post');
      }
    });
  };

  const writePost = () => {
    props.history.push('/write');
  };

  if (!data) {
    props.history.push('/login');
  }

  return (
    <MainPageContainer>
      <div>
        <span onClick={writePost}>새 글 쓰기</span>
      </div>
      {PostList.map((post, idx) => (
        <Post key={idx} post={post} data={data} />
      ))}
    </MainPageContainer>
  );
};
