import { Header, HeaderButton, HeaderContainer } from './CreateHeaderStyle';

function CreateHeader() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderButton to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <g clipPath="url(#clip0_21_8078)">
              <path
                d="M12 8.25H2.8725L7.065 4.0575L6 3L0 9L6 15L7.0575 13.9425L2.8725 9.75H12V8.25Z"
                fill="black"
                fillOpacity="0.54"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_8078">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Вернуться к списку
        </HeaderButton>
      </HeaderContainer>
    </Header>
  );
}
export default CreateHeader;
