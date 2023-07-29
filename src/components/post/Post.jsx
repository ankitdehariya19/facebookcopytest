import React, { useState } from 'react';
import "./Post.css";
import { MoreVert } from '@mui/icons-material';
import '../../dummyData';
import { Users } from '../../dummyData';

export default function Post({ post }) {
  const username = post && post.userId ? Users.filter(u => u.id === post.userId)[0]?.username : '';
  
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLikeed] = useState(false)
  const commentCount = post && post.comment ? post.comment : 0;
  const profileImg = post && post.userId ? Users.filter(u => u.id === post.userId)[0]?.profilePicture : '';

  const likeHandler = ()=> {
    setLike(isLiked ? like-1 : like+1)
    setIsLikeed(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src={profileImg} alt='' />
            <span className='postUsername'>{username}</span>
            <span className='postDate'>{post?.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className="postImg" src={post?.photo} alt="" />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='assets/l.png' onClick={likeHandler} alt='' />
            <img className='likeIcon' src='assets/h.png' onClick={likeHandler} alt='' />
            <span className='postlikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{commentCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
