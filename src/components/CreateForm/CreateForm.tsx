import { useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import Toggle from '../Toggle/Toggle';
import {
  Container,
  Count,
  CountWrap,
  ErrorText1,
  ErrorText2,
  ErrorText3,
  ErrorText4,
  Form,
  FormButton,
  FormDisclaimer,
  FormText,
  FormTitle,
  FormWrap,
  InputColor,
  InputText1,
  InputText2,
  InputText3,
  InputTextWithSvg,
  More,
  Section,
  Textarea,
} from './CreateFormStyle';
import { useForm } from '../../state/storeForm';

function CreateForm() {
  const state = useForm();
  const [errorDescriptorCount, setErrorDescriptorCount] = useState(false);
  const [errorTitleCount, setErrorTitleCount] = useState(false);
  const [errorLinkNameCount, setErrorLinkNameCount] = useState(false);
  const [errorLinkCount, setErrorLinkCount] = useState(false);
  let descriptorCount = 30;
  let titleCount = 50;
  let linkNameCount = 30;
  let linkCount = 50;
  let descriptorCountForm = descriptorCount - state.descriptor.length;
  let titleCountForm = titleCount - state.title.length;
  let linkNameCountForm = linkNameCount - state.linkName.length;
  let linkCountForm = linkCount - state.link.length;

  const setErrorDescriptor = (e: any) => {
    if (descriptorCountForm === 0) {
      setErrorDescriptorCount(true);
      state.setDescriptor(e.target.value, descriptorCount);
    } else {
      setErrorDescriptorCount(false);
      state.setDescriptor(e.target.value, descriptorCount);
    }
  };
  const setErrorTitle = (e: any) => {
    if (titleCountForm === 0) {
      setErrorTitleCount(true);
      state.setTitle(e.target.value, titleCount);
    } else {
      setErrorTitleCount(false);
      state.setTitle(e.target.value, titleCount);
    }
  };
  const setErrorLinkName = (e: any) => {
    if (linkNameCountForm === 0) {
      setErrorLinkNameCount(true);
      state.setLinkName(e.target.value, linkNameCount);
    } else {
      setErrorLinkNameCount(false);
      state.setLinkName(e.target.value, linkNameCount);
    }
  };
  const setErrorLink = (e: any) => {
    if (linkCountForm === 0) {
      setErrorLinkCount(true);
      state.setLink(e.target.value, linkCount);
    } else {
      setErrorLinkCount(false);
      state.setLink(e.target.value, linkCount);
    }
  };

  const post = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Container>
        <Form>
          <FormWrap>
            <FormTitle>Расскажите о подборке</FormTitle>
            <FormText>Желательно сделать это кратко и ёмко</FormText>
            <CountWrap>
              <InputText1
                type="text"
                placeholder="Дискриптор"
                required
                value={state.descriptor}
                onChange={(e) => setErrorDescriptor(e)}
                $error={errorDescriptorCount}
              />
              <Count>{descriptorCountForm}</Count>
              <ErrorText1 $error={errorDescriptorCount}>
                Дискриптор превышает {descriptorCount} знаков
              </ErrorText1>
            </CountWrap>
            <CountWrap>
              <InputText2
                type="text"
                placeholder="Название"
                required
                value={state.title}
                onChange={(e) => setErrorTitle(e)}
                $error={errorTitleCount}
              />
              <Count>{titleCountForm}</Count>
              <ErrorText2 $error={errorTitleCount}>
                Название превышает {titleCount} знаков
              </ErrorText2>
            </CountWrap>
            <Textarea
              placeholder="Описание"
              required
              value={state.description}
              onChange={(e) => state.setDescription(e.target.value)}
            />
          </FormWrap>
          <FormWrap>
            <FormTitle>Загрузите обложку</FormTitle>
            <Loading />
          </FormWrap>
          <FormWrap>
            <FormTitle>Выберите цвет</FormTitle>
            <FormText>Лучше всего подойдет цвет преобладающий на обложке</FormText>
            <InputColor
              type="color"
              id="color"
              value={state.color}
              onChange={(e) => state.setColor(e.target.value)}
            />
          </FormWrap>
          <FormWrap>
            <FormTitle>Проверьте читабельность</FormTitle>
            <FormText>
              Выберите цвет интерфейса, который будет контрастнее смотреться на выбранном ранее фоне
            </FormText>
            <Toggle />
          </FormWrap>
          <FormWrap>
            <FormTitle>Оставьте ссылку</FormTitle>
            <FormText>Лучше всего ссылаться на каталог вашего магазина или промо-страницу</FormText>
            <CountWrap>
              <InputText3
                type="text"
                required
                placeholder="Название"
                value={state.linkName}
                onChange={(e) => setErrorLinkName(e)}
                $error={errorLinkNameCount}
              />
              <Count>{linkNameCountForm}</Count>
              <ErrorText3 $error={errorLinkNameCount}>
                Название превышает {linkNameCount} знаков
              </ErrorText3>
            </CountWrap>
            <CountWrap>
              <InputTextWithSvg
                type="text"
                required
                placeholder="Ссылка"
                value={state.link}
                onChange={(e) => setErrorLink(e)}
                $error={errorLinkCount}
              />
              <Count>{linkCountForm}</Count>
              <ErrorText4 $error={errorLinkCount}>Ссылка превышает {linkCount} знаков</ErrorText4>
              <More>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none">
                  <g clipPath="url(#clip0_1943_333)">
                    <path
                      d="M3.73746 12C3.73746 10.29 5.06954 8.9 6.70829 8.9H10.5416V7H6.70829C4.06329 7 1.91663 9.24 1.91663 12C1.91663 14.76 4.06329 17 6.70829 17H10.5416V15.1H6.70829C5.06954 15.1 3.73746 13.71 3.73746 12ZM7.66663 13H15.3333V11H7.66663V13ZM16.2916 7H12.4583V8.9H16.2916C17.9304 8.9 19.2625 10.29 19.2625 12C19.2625 13.71 17.9304 15.1 16.2916 15.1H12.4583V17H16.2916C18.9366 17 21.0833 14.76 21.0833 12C21.0833 9.24 18.9366 7 16.2916 7Z"
                      fill="black"
                      fillOpacity="0.54"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1943_333">
                      <rect width="23" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </More>
            </CountWrap>
          </FormWrap>
          <FormButton onClick={() => post()}>Создать</FormButton>
          <FormDisclaimer>
            Подборка не будет опубликована. Вы сможете добавить продукты и внести правки
          </FormDisclaimer>
        </Form>
      </Container>
    </Section>
  );
}

export default CreateForm;
