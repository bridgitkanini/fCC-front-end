import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
    return (
        <div>
            <div className="wrapper">
                <h2>25 + 5 Clock</h2>
                <div className="break-session-length">
                    <div>
                        <h3 id="break-label">Break Length</h3>
                        <div>
                            <button id="break-increment">Increase</button>
                            <strong id="break-length"></strong>
                            <button id="break-decrement">Decrease</button>
                        </div>
                    </div>
                    <div>
                        <h3 id="session-label">Session Length</h3>
                        <div>
                            <button id="session-increment">Increase</button>
                            <strong id="session-break"></strong>
                            <button id="session-decrement">Decrease</button>
                        </div>
                    </div>
               </div>
               <div className="timer-wrapper">
                    <div className="timer">
                        <h2 id="timer-label"></h2>
                        <h3 id="time-left"></h3>
                    </div>
                    <button id="start_stop">Start/Stop</button>
                    <button id="reset">Reset</button>
               </div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));