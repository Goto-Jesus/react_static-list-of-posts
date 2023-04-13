import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

const NoComments = () => (
  <>
    <hr />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </>
);

export const PostInfo: React.FC<Props> = ({
  post,
}) => {
  const {
    comments,
    title,
    body,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {post.comments.length > 0
        ? (<CommentList comments={comments} />)
        : (<NoComments />)}
    </div>
  );
};
