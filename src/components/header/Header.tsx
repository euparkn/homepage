import { styled } from "styled-components";
import { useRecoilState } from "recoil";

import { optionAtom } from "store";

import { ReactComponent as DarkModeIcon } from "assets/icons/dark-mode.svg";
import { ReactComponent as LightModeIcon } from "assets/icons/light-mode.svg";

function Header() {
  const [option, setOption] = useRecoilState(optionAtom);

  return (
    <Wrapper>
      <Container>
        <Switch className="toggle_switch">
          <input
            type="checkbox"
            checked={option.darkMode}
            onChange={(e) => setOption({ darkMode: e.target.checked })}
          />
          <span>{option.darkMode ? <LightModeIcon /> : <DarkModeIcon />}</span>
        </Switch>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 14px;
  box-sizing: border-box;
`;

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

export default Header;
