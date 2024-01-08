/* 
Pseudocode:
#1:An outer container, id="drum-machine", contains all other elements.

#2: Within #drum-machine an element with a corresponding id="display".

#3: Within #drum-machine 9 clickable drum pad elements, className="drum-pad": Q, W, E, A, S, D, Z, X, C.

#4: Within each .drum-pad, an HTML5 audio element which has a src attribute pointing to an audio clip, className="clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

#5: onClick of .drum-pad element, the audio clip contained in its child audio element should be triggered.

#6: Pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.

#7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element.

Elements: 
#drum-machine -> #display(sound name) -> .drum-pads(letters) -> .clip(audio src) -> power button/toggle -> volume scroll -> change sound name button/toggle

Functions: 
i) .drum-pads onClick; 
- Corresponding audio.
- Corresponding #display name{object/array?}.
ii) #button/toggle onClick; 2 conditions for each, either/or; 
- Power = on/off 
- Change sound name = heather kit/ smooth piano kit
iii) Volume scroll, 0 - 100.
*/

import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const firstSoundsGroup = [
    {
      keyCode: 81,
      key: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      key: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      key: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      key: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

const secondSoundsGroup = [
    {
      keyCode: 81,
      key: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
      keyCode: 87,
      key: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
      keyCode: 69,
      key: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
      keyCode: 65,
      key: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
      keyCode: 83,
      key: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
      keyCode: 68,
      key: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
      keyCode: 88,
      key: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
      keyCode: 67,
      key: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit"
};
  
const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup
};

const DrumKey = ({ play, deactivateAudio, sound: { id, key, url, keycode } }) => {
  const handleKeydown = (e) => {
    if (keyCode === e.keycode) {
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
};

const DrumMachine = ({ sounds, play, power, deactivateAudio }) => (
  <div className="keyboard">
    {power
      ? sounds.map((sound) => <KeyboardKey sound={sound} play={play} deactivateAudio={deactivateAudio} />)
      : sounds.map((sound) => <KeyboardKey sound={{ ...sound, url: "#" }} play={play} deactivateAudio={deactivateAudio} />)
    }
  </div>
);

const DrumControl = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => (
  <div className="control">
    /* <button onClick={stop}>Turn Power {power ? 'OFF' : 'ON'}</button> */
    <div>
      <label class="toggle-container" >
        <input type="checkbox" class="toggle-input"></input>
        <span onClick={stop} class="toggle-slider">{power ? 'OFF' : 'ON'}</span>
      </label>
    </div>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      onChange={handleVolumeChange}
    />
    <h2 id="display">{name}</h2>
    <button onClick={changeSoundGroup}>Change Sounds Group</button>
  </div>
);

const App = () => {
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className="wrapper">
        <DrumMachine sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
        <DrumControl
          stop={stop}
          power={power}
          volume={volume}
          name={soundName || soundsName[soundType]}
          changeSoundGroup={changeSoundGroup}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

  /*
const DrumMachine = () => {
  const AudioPlayer = ({ playAudio }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioEnd = () => {
      setIsPlaying(false);
    };
    
    return (
      <div>
        <button id="button" className="drum-pad" onClick={playAudio}>
          <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          Q
        </button>
      </div>
      );
    };
  };


  const PowerToggle = ({ toggleMute }) => {
    const [isMuted, setIsMuted] = useState(false);

    return (
      <div>
        <label id="power" class="toggle-container">
          <input type="checkbox" class="toggle-input" onClick={toggleMute} />
          <span class="toggle-slider"></span>
          Power
        </label>
      </div>
    );
  };

  const VolumeControl = ({ handleScroll }) => {
    const [volume, setVolume] = useState(50);

    return (
      <div id="volume" className="scrollable-container" onWheel={handleScroll}>
        <p>Volume:</p>
      </div>
    );
};

const DrumButton = ({ playAudio }) => {
  return (
    <div>
      <button id="button" className="drum-pad" onClick={playAudio}>
        <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        Q
      </button>
    </div>
  );
};



    return (
    <div id="drum-machine">
      <div id="display"></div>
      <button id="button" className="drum-pad">
        <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        Q
      </button>
      <button id="button" className="drum-pad">
        <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
        W
      </button>
      <button id="button" className="drum-pad">
        <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
        E
      </button>
      <button id="button" className="drum-pad">
        <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
        A
      </button>
      <button id="button" className="drum-pad">
        <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
        S
      </button>
      <button id="button" className="drum-pad">
        <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
        D
      </button>
      <button id="button" className="drum-pad">
        <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
        Z
      </button>
      <button id="button" className="drum-pad">
        <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
        X
      </button>
      <button id="button" className="drum-pad">
        <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
        C
      </button>
      <div>
        <label id="power" class="toggle-container">
          <input type="checkbox" class="toggle-input" />
          <span class="toggle-slider"></span>
          Power
        </label>
        <div id="volume" className="scrollable-container">
            <p>Volume:</p>
        </div>
        <label id="sound-group" class="toggle-container">
          <input type="checkbox" class="toggle-input" />
          <span class="toggle-slider"></span>
          Sound Group
        </label>
      </div>
    </div>
    );return (
  <div id="drum-machine">
    <div id="display"></div>
    <button id="button" className="drum-pad">
      <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
      Q
    </button>
    <button id="button" className="drum-pad">
      <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
      W
    </button>
    <button id="button" className="drum-pad">
      <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
      E
    </button>
    <button id="button" className="drum-pad">
      <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
      A
    </button>
    <button id="button" className="drum-pad">
      <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
      S
    </button>
    <button id="button" className="drum-pad">
      <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
      D
    </button>
    <button id="button" className="drum-pad">
      <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
      Z
    </button>
    <button id="button" className="drum-pad">
      <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
      X
    </button>
    <button id="button" className="drum-pad">
      <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
      C
    </button>
    <div>
      <label id="power" class="toggle-container">
        <input type="checkbox" class="toggle-input" />
        <span class="toggle-slider"></span>
        Power
      </label>
      <div id="volume">
          <p>Volume:</p>
      </div>
      <label id="sound-group" class="toggle-container">
        <input type="checkbox" class="toggle-input" />
        <span class="toggle-slider"></span>
        Sound Group
      </label>
    </div>
  </div>
  );
 
  
  const Appp = () => {

    const playAudio = () => {
      setIsPlaying(true);
    };

    const toggleMute = () => {
      setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    const handleScroll = (event) => {

      const delta = event.deltaX > 0 ? -2 : 2;

      const newVolume = Math.max(100, Math.min(0, volume + delta));

      setVolume(newVolume);
    };

    return (
      <div>
        <h1>Drum Machine Here We Go!</h1>
        <DrumMachine />
        <AudioPlayer playAudio={playAudio} />
        <PowerToggle toggleMute={toggleMute} />
        <VolumeControl handleScroll={handleScroll} />
        <DrumButton playAudio={playAudio} />
      </div>
    );
  };
   */