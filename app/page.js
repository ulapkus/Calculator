"use client";

import React, { useState } from "react";

function Calculator() {
  const [count, setCount] = React.useState("0");

  const buttonArr = [
    { number: "zero", text: "0" },
    { number: "one", text: "1" },
    { number: "two", text: "2" },
    { number: "three", text: "3" },
    { number: "four", text: "4" },
    { number: "five", text: "5" },
    { number: "six", text: "6" },
    { number: "seven", text: "7" },
    { number: "eight", text: "8" },
    { number: "nine", text: "9" },
    { number: "subtract", text: "-" },
    { number: "add", text: "+" },
    { number: "multiply", text: "*" },
    { number: "divide", text: "/" },
    { number: "decimal", text: "." },
  ];

  const buttonPress = (event) => {
    buttonArr.forEach((item) => {
      if (event.target.id === "zero" && count === "0") {
        return;
      } else if (event.target.id === "add" && count.match(/[-+*/]+$/)) {
        setCount(count.slice(0, -count.match(/[-+*/]+$/)[0].length) + "+");
      } else if (event.target.id === "add" && count.match(/[-+*/]$/)) {
        setCount(count.slice(0, -1) + "+");
      } else if (event.target.id === "multiply" && count.match(/[+*/]$/)) {
        setCount(count.slice(0, -1) + "*");
      } else if (event.target.id === "divide" && count.match(/[+*/]$/)) {
        setCount(count.slice(0, -1) + "/");
      } else if (event.target.id === item.number && count === "0") {
        setCount(item.text);
      } else if (event.target.id === "zero" && count.match(/[-+*/]*0{1,}/)) {
        return;
      } else if (
        event.target.id === "decimal" &&
        (count.match(/\d+\.$/) || count.match(/\d+\.\d+$/))
      ) {
        setCount(count);
      } else if (event.target.id === item.number) {
        setCount(count + "" + item.text);
      } else if (event.target.id === "clear") {
        setCount("0");
      } else if (event.target.id === "equals") {
        setCount(eval(count).toString());
      }
    });
  };

  return (
    <div id="container">
    <main>
      <section id="display">{count}</section>
<section id="button-box">
      <button className="button" id="seven" onClick={buttonPress}>
        7
      </button>
      <button className="button" id="eight" onClick={buttonPress}>
        8
      </button>
      <button className="button" id="nine" onClick={buttonPress}>
        9
      </button>
      <button className="button" id="subtract" onClick={buttonPress}>
        -
      </button>
      <button className="button" id="four" onClick={buttonPress}>
        4
      </button>
      <button className="button" id="five" onClick={buttonPress}>
        5
      </button>
      <button className="button" id="six" onClick={buttonPress}>
        6
      </button>
      <button className="button" id="add" onClick={buttonPress}>
        +
      </button>
      <button className="button" id="one" onClick={buttonPress}>
        1
      </button>
      <button className="button" id="two" onClick={buttonPress}>
        2
      </button>
      <button className="button" id="three" onClick={buttonPress}>
        3
      </button>
      <button className="button" id="multiply" onClick={buttonPress}>
        x
      </button>
      <button className="button" id="zero" onClick={buttonPress}>
        0
      </button>
      <button className="button" id="decimal" onClick={buttonPress}>
        .
      </button>
      <button className="button" id="divide" onClick={buttonPress}>
        /
      </button>
      <button className="button" id="equals" onClick={buttonPress}>
        =
      </button>
      <button className="button" id="clear" onClick={buttonPress}>
        AC
      </button>
      </section>
    </main>
    </div>
  );
}

export default Calculator;
