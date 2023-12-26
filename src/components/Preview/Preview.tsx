import { useForm } from '../../state/storeForm';
import {
  Container,
  Display,
  DisplayBottom,
  DisplayContent,
  DisplayIndicator,
  DisplayText,
  DisplayTime,
  DisplayTitle,
  DisplayTop,
  Mobile,
  Section,
} from './PreviewStyle';

// import img from '../../assets/img/onion.jpg';

function Preview() {
  const state = useForm();
  return (
    <Section>
      <Container>
        <Mobile>
          <Display>
            <DisplayTop>
              <DisplayTime $theme={state.theme ? state.theme.toString() : ''}>22:47</DisplayTime>
              <DisplayIndicator $theme={state.theme ? state.theme.toString() : ''}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none">
                  <path
                    d="M5.05245 0C6.82733 0 8.62004 0.698998 10.1114 1.97043L9.43835 2.71829C8.20919 1.68322 6.65593 1.11457 5.05245 1.11457C3.44968 1.11457 1.8984 1.6816 0.671574 2.71324L0 1.96538C1.48933 0.697015 3.27935 0 5.05245 0ZM5.05245 2.62075C6.25065 2.62075 7.43698 3.06265 8.4049 3.86766L7.6847 4.66816C6.94148 4.06526 6.01084 3.73442 5.05245 3.73442C4.09604 3.73442 3.16646 4.064 2.42286 4.66492L1.70359 3.86369C2.67132 3.06138 3.85639 2.62075 5.05245 2.62075ZM5.05245 5.20598C5.61418 5.20598 6.186 5.41331 6.67392 5.79157L5.05245 7.59396L3.43257 5.78941C3.91996 5.41241 4.49107 5.20598 5.05245 5.20598Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 4C21 4.81421 20.5429 5.47368 19.7143 5.47368V2.52632C20.5429 2.52632 21 3.18596 21 4ZM19.2857 1.26316V6.73684V6.74404C19.2857 7.44147 18.7099 8 18 8H1.28573C0.57567 8 0 7.44147 0 6.74404V6.73684V1.26316C0 0.565542 0.57567 0 1.28573 0H18C18.7099 -1.79937e-07 19.2857 0.565542 19.2857 1.26316ZM1.28573 0.421052C0.813019 0.421052 0.428587 0.79892 0.428587 1.26316V6.73684C0.428587 7.20126 0.813019 7.57895 1.28573 7.57895H18C18.4727 7.57895 18.8571 7.20126 18.8571 6.73684V1.26316C18.8571 0.79892 18.4727 0.421052 18 0.421052H1.28573ZM0.857147 1.26316V6.73684C0.857147 6.96914 1.04945 7.15789 1.28573 7.15789H18C18.2363 7.15789 18.4286 6.96914 18.4286 6.73684V1.26316C18.4286 1.03104 18.2363 0.842105 18 0.842105H1.28573C1.04945 0.842105 0.857147 1.03104 0.857147 1.26316Z"
                    fill="white"
                  />
                </svg>
              </DisplayIndicator>
            </DisplayTop>
            <DisplayBottom>
              <img src={state.file} alt="" />
              <DisplayContent $color={state.color}>
                <DisplayTitle $theme={state.theme ? state.theme.toString() : ''}>
                  {state.title}
                </DisplayTitle>
                <DisplayText $theme={state.theme ? state.theme.toString() : ''}>
                  {state.description}
                </DisplayText>
              </DisplayContent>
            </DisplayBottom>
          </Display>
        </Mobile>
      </Container>
    </Section>
  );
}

export default Preview;
