import { FunctionComponent, useState } from 'react';
import {
  PostButtonOne,
  PostButtonTwo,
  PostStatus,
  PostText,
  PostTextBig,
  PostTitle,
  PostWrap,
  PostWrapLink,
  PostWrapStatus,
} from './PostStyle';
import { initPost } from '../../pages/Posts/Posts';
import BurderMenu from '../BurgerMenu/BurgerMenu';

export interface Props {
  id: number;
  openMenu: boolean;
}
const Post: FunctionComponent<initPost> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PostWrap>
        <img src={props.file} alt="" />
        <div>
          <PostTitle>{props.title}</PostTitle>
          <PostText>@{props.descriptor}</PostText>
        </div>
      </PostWrap>
      <PostWrapStatus>
        <PostStatus $colorStatus={props.success}></PostStatus>
        <div>
          <PostTextBig>altenar</PostTextBig>
          <PostText>{props.time.slice(0, -14).split('-').join('.')}</PostText>
        </div>
      </PostWrapStatus>
      <PostWrapLink>
        <PostButtonOne>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <g clipPath="url(#clip0_21_7945)">
              <path
                d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
                fill="#757575"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_7945">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </PostButtonOne>
        <PostButtonTwo onClick={() => setOpen(!open)} $buttonStatus={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <g clipPath="url(#clip0_21_7939)">
              <path
                d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                fill="#757575"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_7939">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </PostButtonTwo>
        <BurderMenu id={props.id} openMenu={open} />
      </PostWrapLink>
    </>
  );
};

export default Post;
