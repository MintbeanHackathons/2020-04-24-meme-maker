import React, { useState } from 'react';
import Canvas from './containers/canvas';
import Inputs from './containers/inputs';
import mintBean from './images/mintbeanlogo.png';


function App() {
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  
  const handleChange = (event) => {
    if (event.target.name === "top"){
      setTopText(event.target.value)
    } else {
      setBottomText(event.target.value)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Carlos's Meme Generator</h1>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Canvas
                imageURL={mintBean}
                textTop={topText}
                textBottom={bottomText}
              />
            </div>
            <div className="col-6">
              <Inputs
                topText={topText}
                bottomText={bottomText}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
