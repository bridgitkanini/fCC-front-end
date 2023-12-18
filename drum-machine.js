/* 
Pseudocode:
#1:An outer container, id="drum-machine", contains all other elements.

#2: Within #drum-machine an element with a corresponding id="display".

#3: Within #drum-machine 9 clickable drum pad elements, className="drum-pad": Q, W, E, A, S, D, Z, X, C.

#4: Within each .drum-pad, an HTML5 audio element which has a src attribute pointing to an audio clip, className="clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

#5: onClick of .drum-pad element, the audio clip contained in its child audio element should be triggered.

#6: Pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.

#7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element.
*/

import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
  return (<h1>Drum Machine Here We Go!</h1>);
};

ReactDOM.render(<App />, document.getElementById("app"));