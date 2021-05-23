import Log from "./log"
import Calc from "./calc"
import img from "./react-icon.png";
import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

const App =  () => {
  console.log("yabadabadooo!!");
  return <div>Hello</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));


const el = document.createElement("img");
el.src = img;
document.body.appendChild(el);

const calc = new Calc();
const log = new Log();


log.log(calc.add(1,2,3))

