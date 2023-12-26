import { useForm } from '../../state/storeForm';
import {
  ToggleBlock,
  ToggleWrap,
  ToggleInput,
  ToggleSlider,
  ToggleOptionDark,
  ToggleOptionLight,
} from './ToggleStyle';
function Toggle() {
  const state = useForm();
  return (
    <ToggleBlock>
      <ToggleOptionDark $theme={state.theme ? state.theme.toString() : ''}>Темный</ToggleOptionDark>
      <ToggleWrap htmlFor="Toggle">
        <ToggleInput
          type="checkbox"
          id="Toggle"
          aria-label="Цвет"
          checked={state.theme}
          onChange={() => state.setTheme()}
        />
        <ToggleSlider></ToggleSlider>
      </ToggleWrap>
      <ToggleOptionLight $theme={state.theme ? state.theme.toString() : ''}>
        Светлый
      </ToggleOptionLight>
    </ToggleBlock>
  );
}

export default Toggle;
