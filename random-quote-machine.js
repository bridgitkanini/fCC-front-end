/* Random Quote Machine:
HTML
Quotes = #quote-box(meant array holding all quotes; quoteData), #text, #author
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

const quoteData = [
    {
        text: "You are not alone. You are seen. I am with you. You are not alone." ,
        author: "— Shonda Rhimes" 
    },
    {
        text: "There is a crack in everything, that\’s how the light gets in." ,
        author: "― Leonard Cohen"
    },
    {
        text: "Not until we are lost do we begin to understand ourselves." ,
        author: "― Henry David Thoreau"
    },
    {
        text: "There is hope, even when your brain tells you there isn\’t." ,
        author: "— John Green"
    },
    {
        text: "Promise me you\’ll always remember: you\’re braver than you believe, and stronger than you seem, and smarter than you think." ,
        author: "— Christopher Robin from Winnie the Pooh"
    
    },
    {
        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light." ,
        author: "— Albus Dumbledore"
    },
    {
        text: "Change what you can, manage what you can’t." ,
        author: "— Raymond McCauley"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light." ,
        author: "— Aristotle"
    },
    {
        text: "If you can’t fly, run. If you can’t run, walk. If you can’t walk, crawl, but by all means, keep moving." ,
        author: "— Martin Luther King, Jr."
    },
    {
        text: "It is okay to have depression, it is okay to have anxiety and it is okay to have an adjustment disorder. We need to improve the conversation. We all have mental health in the same way we all have physical health." ,
        author: "— Prince Harry"
    },
    {
        text: "Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN." ,
        author: "— Matt Haig"
    },
    {
        text: "My dark days made me stronger. Or maybe I already was strong, and they made me prove it." ,
        author: "— Emery Lord"
    },
    {
        text: "Your present circumstances don’t determine where you go; they merely determine where you start." ,
        author: "– Nido Qubein"
    },
    {
        text: "Just because no one else can heal or do your inner work for you doesn’t mean you can, should, or need to do it alone." ,
        author: "— Lisa Olivera"
    },
    {
        text: "Healing takes time, and asking for help is a courageous step." ,
        author: "— Mariska Hargitay"
    }
]

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