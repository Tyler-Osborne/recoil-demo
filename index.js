import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Example from "./components/Example";
import CharacterCounter from "./components/CharacterCounter";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <p>Enter some text and see how many characters it has</p>
      <CharacterCounter />
    </RecoilRoot>
  );
}

render(<App />, document.getElementById("root"));
