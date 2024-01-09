import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const calcData = [
    { id: "clear", value: "AC" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "x" },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "subtract", value: "-" },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "add", value: "+" },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "equals", value: "=" },
    { id: "zero", value: 0 },
    { id: "decimal", value: "." }
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operators = ["AC", "/", "x", "+", "-", "="];

const Display = ({ input, output }) => (
    <div className="output">
        <span className="result">{output}</span>
        <span id="display" className="input">{input}</span>
    </div>
);

const Key = () => (
    <button></button>
);

const Keyboard = () => (
    <div></div>
);

const App = () => {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    return (
        <div>
            <h1>JavaScript Calculator</h1>
            <Display input={input} output={output} />
            <p>by bkm-code</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"))