import {
  Header,
  HeaderButtonMessengers,
  HeaderButtonNext,
  HeaderContainer,
  HeaderMain,
  HeaderText,
  HeaderTitle,
} from './PostsHeaderStyle';

function PostsHeader() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderMain>
          <div>
            <HeaderTitle>Социальные сети</HeaderTitle>
            <HeaderText>Делитесь постами из соцсетей</HeaderText>
          </div>
          <HeaderButtonNext to="/creation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <g clipPath="url(#clip0_1905_307)">
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1905_307">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Добавить
          </HeaderButtonNext>
        </HeaderMain>
        <div>
          <HeaderButtonMessengers>Instagram</HeaderButtonMessengers>
          <HeaderButtonMessengers>Vkontakte</HeaderButtonMessengers>
        </div>
      </HeaderContainer>
    </Header>
  );
}
export default PostsHeader;
