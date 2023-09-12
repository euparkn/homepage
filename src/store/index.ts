import { atom } from "recoil";

interface Option {
  darkMode: boolean;
}

const OPTION_STORAGE = "@homepage-mode";

export const optionAtom = atom<Option>({
  key: "option",
  default: { darkMode: false },
  effects: [
    ({ setSelf, onSet }) => {
      const savedItem = localStorage.getItem(OPTION_STORAGE);
      if (savedItem != null) {
        setSelf(JSON.parse(savedItem));
      }
      onSet((newValue: Option) => {
        localStorage.setItem(OPTION_STORAGE, JSON.stringify(newValue));
      });
    },
  ],
});
