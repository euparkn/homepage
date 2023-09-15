import styled from "styled-components";
import { useRecoilState } from "recoil";

import { optionAtom } from "store";

import { ReactComponent as DarkModeIcon } from "assets/icons/dark-mode.svg";
import { ReactComponent as LightModeIcon } from "assets/icons/light-mode.svg";

function ModeSwitch() {
  const [option, setOption] = useRecoilState(optionAtom);

  return (
    <Switch className="toggle_switch">
      <input
        type="checkbox"
        checked={option.darkMode}
        onChange={(e) => setOption({ darkMode: e.target.checked })}
      />
      <span>{option.darkMode ? <LightModeIcon /> : <DarkModeIcon />}</span>
    </Switch>
  );
}

const Switch = styled.label`
  cursor: pointer;
  display: flex;
  input {
    opacity: 0;
  }
  span {
    display: block;
    border-radius: 50%;
    transition: 0.2s;
    background-color: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.stroke};
    svg {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin: 4px;
    }
  }
  &:hover span,
  input[type="checkbox"]:focus-visible + span {
    background-color: ${(props) => props.theme.stroke};
  }
`;

export default ModeSwitch;
