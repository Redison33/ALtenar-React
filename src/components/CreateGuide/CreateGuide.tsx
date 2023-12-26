import { Guide, Container, GuideWrap, GuideTitle, GuideText, GuideLink } from './CreateGuideStyle';

function CreateGuide() {
  return (
    <Guide>
      <Container>
        <GuideWrap>
          <GuideTitle>Создайте подборку</GuideTitle>
          <GuideText>
            Перед началом ознакомьтесь с <GuideLink>гайдлайнами</GuideLink>, где вы найдете примеры
            правильного оформления
          </GuideText>
        </GuideWrap>
      </Container>
    </Guide>
  );
}
export default CreateGuide;
