import React from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  }
});

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "" // default value (aka initial value)
});
