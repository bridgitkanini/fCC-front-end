import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
    const [breakLength, setBreakLength] = React.useState(5);
    const [sessionLength, setSessionLength] = React.useState(25);
    const [play, setPlay] = React.useState(false);

    const handleBreakIncrease = () => {
        if (breakLength > 60) {
            setBreakLength(breakLength + 1)
        }
    };

    const handleBreakDecrease = () => {
        if (breakLength > 1) {
            setBreakLength(breakLength - 1)
        }
    };

    const handleSessionIncrease = () => {
        if (sessionLength < 60) {
            setSessionLength(sessionLength + 1)
        }
    };

    const handleSessionDecrease = () => {
        if (sessionLength > 1) {
            setSessionLength(sessionLength - 1)
        }
    };

    const handlePlay = {};

    const handleReset = {};

    return (
        <div>
            <div className="wrapper">
                <h2>25 + 5 Clock</h2>
                <div className="break-session-length">
                    <div>
                        <h3 id="break-label">Break Length</h3>
                        <div>
                            <button id="break-increment" disabled={play} onClick={handleBreakIncrease}>Increase</button>
                            <strong id="break-length">{breakLength}</strong>
                            <button id="break-decrement" disabled={play} onClick={handleBreakDecrease}>Decrease</button>
                        </div>
                    </div>
                    <div>
                        <h3 id="session-label">Session Length</h3>
                        <div>
                            <button id="session-increment" disabled={play} onClick={handleSessionIncrease}>Increase</button>
                            <strong id="session-break">{sessionLength}</strong>
                            <button id="session-decrement" disabled={play} onClick={handleSessionDecrease}>Decrease</button>
                        </div>
                    </div>
               </div>
               <div className="timer-wrapper">
                    <div className="timer">
                        <h2 id="timer-label">{title}</h2>
                        <h3 id="time-left">{timeFormatter()}</h3>
                    </div>
                    <button id="start_stop" onClick={handlePlay}>Start/Stop</button>
                    <button id="reset" onClick={handleReset}>Reset</button>
               </div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));