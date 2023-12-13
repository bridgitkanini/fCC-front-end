/* Random Quote Machine:
HTML
Quotes = #quote-box, #text, #author
Placement of quotes on page = #quote-box
Link to tweet quote = #tweet-quote (<a href="twitter.com/intent/tweet" />)
Icon styles: quote(") icon, twitter icon = #tweet-quote
New button create -> New button function; onClick, move to new quote. = #new-quote
Color; Background + Quote -> Color change, each quote different color.

1. React Component:
-Class; this-state
-Methods
-Render

2. Redux:
-Action
-Action Creator
-Reducer
-Store

3. React-Redux:
-Provider; wrapper component, rendered.
-Connect; mapStateToProps(), mapDispatchToProps()
*/

import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";


const Quotebox = () => (
  <div id="quote-box">
    <h3 
      id="text">
      <i class='fa fa-quote-left'></i> 
      Text here...
    </h3>
    <p 
      id="author">
      - Author here
    </p>
    <div id="actions">
      <button 
        id="new-quote" 
        class="button">
        New Quote
      </button>
      <a 
        id="tweet-quote" 
        href="twitter.com/intent/tweet" 
        target="_blank">
        <i class="fa fa-paper-plane"></i> 
      </a>
    </div>
    <p>by bkm-code</p>
  </div>
);

const App = () => (
  <div id="main">
    <Quotebox />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#app"))





// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 


/* Random Quote Machine:
HTML
Quotes = #quote-box, #text, #author
Placement of quotes on page = #quote-box
Link to tweet quote = #tweet-quote (<a href="twitter.com/intent/tweet" />)
Icon styles: quote(") icon, twitter icon = #tweet-quote
New button create -> New button function; onClick, move to new quote. = #new-quote
Color; Background + Quote -> Color change, each quote different color.

1. React Component:
-Class; this-state
-Methods
-Render

2. Redux:
-Action
-Action Creator
-Reducer
-Store

3. React-Redux:
-Provider; wrapper component, rendered.
-Connect; mapStateToProps(), mapDispatchToProps()
*/