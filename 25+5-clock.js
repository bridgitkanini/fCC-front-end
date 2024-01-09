import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
    const [breakLength, setBreakLength] = React.useState(5);
    const [sessionLength, setSessionLength] = React.useState(25);
    const [play, setPlay] = React.useState(false);
    const [timingType, setTimingtype] = React.useState("SESSION");
    const [timeLeft, seTimeLeft] = React.useState(1500);

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
            seTimeLeft(timeLeft + 60)
        }
    };

    const handleSessionDecrease = () => {
        if (sessionLength > 1) {
            setSessionLength(sessionLength - 1)
            seTimeLeft(timeLeft - 60)
        }
    };

    const title = timingType === "SESSION" ? "Session" : "Break";

    const timeFormatter = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const timeout = setTimeout(() => {
        if (timeLeft && play) {
          seTimeLeft(timeLeft - 1)
        }
      }, 1000);

    const handlePlay = () => {
        clearTimeout(timeout);
        setPlay(!play);
    };

    const clock = () => {
        if (play) {
          timeout
          resetTimer()
        } else {
          clearTimeout(timeout)
        }
    };

    React.useEffect(() => { clock() }, [play, timeLeft, timeout]);

    const resetTimer = () => {
        const audio = document.getElementById("beep");

        if (!timeLeft && timingType === "SESSION") {
          seTimeLeft(breakLength * 60)
          setTimingtype("BREAK")
          audio.play()
        }
        
        if (!timeLeft && timingType === "BREAK") {
          seTimeLeft(sessionLength * 60)
          setTimingtype("SESSION")
          audio.pause()
          audio.currentTime = 0;
        }
    };

    const handleReset = () => {
        clearTimeout(timeout);
        setPlay(false);
        seTimeLeft(1500);
        setBreakLength(5);
        setSessionLength(25);
        setTimingtype("SESSION");
        
        const audio = document.getElementById("beep");

        audio.pause();
        audio.currentTime = 0;
    };

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