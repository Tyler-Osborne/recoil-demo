import React from "react";
import { charCountState } from "../globalState";
import { useRecoilValue } from "recoil";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

export default CharacterCount;
