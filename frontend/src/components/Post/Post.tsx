import React from 'react';
import { PostContainer } from './style';
import { MakeDate } from '../../utils/makeDate';

export const Post = (props: any) => {
  const post = props.post;
  const data = props.data;

  return (
    <PostContainer>
      {post.writer._id === data._id ? (
        <div className="delete_btn">
          <span className="edit">수정</span>
          <span className="del">삭제</span>
        </div>
      ) : null}

      <h3>{post.title}</h3>
      <span>{MakeDate(post.createdAt)}</span>
      {post.filePath ? <img src={post.filePath[0]} /> : null}
      <span>{post.content}</span>
      <span>댓글 0 좋아요 0</span>
    </PostContainer>
  );
};
