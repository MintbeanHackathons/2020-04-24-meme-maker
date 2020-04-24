import React, { useState } from 'react';
import Canvas from './containers/canvas';
import Inputs from './containers/inputs';
import mintBean from './images/mintbeanlogo.png';
import dlCanvas from './scripts/imageFileGen';


function App() {
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [imageUrl, setImageUrl] = useState(window.location.origin + mintBean);

  const handleChange = (event) => {
    if (event.target.name === "top"){
      setTopText(event.target.value)
    } else if (event.target.name === "imageUrl"){
      setImageUrl(event.target.value)
    } else{
      setBottomText(event.target.value)
    }
  }

  const generateImage = () => {
    console.log("generate image");
    var svg = document.querySelector('svg');
    var img = document.querySelector('img');
    var canvas = document.querySelector('canvas');
    
    // get svg data
    var xml = new XMLSerializer().serializeToString(svg);
    
    // make it base64
    var svg64 = btoa(xml);
    var b64Start = 'data:image/svg+xml;base64,';
    
    // prepend a "header"
    var image64 = b64Start + svg64;
    
    // set it as the source of the img element
    img.src = image64;
    
    // draw the image onto the canvas
    canvas.getContext('2d').drawImage(img, 0, 0);

    var dt = canvas.toDataURL('image/png'); // << this fails in IE/Edge...
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
    
    document.getElementById("dlbtn").href = dt
    
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
                imageUrl={imageUrl}
                textTop={topText}
                textBottom={bottomText}
              />
            </div>
            <div className="col-6">
              <Inputs
                topText={topText}
                bottomText={bottomText}
                imageUrl={imageUrl}
                handleChange={handleChange}
              />
              <button onClick={generateImage}>Generate Image</button>
              <a id="dlbtn" download="Canvas.png">download</a>
            </div>
          </div>
        </div>
        <img id="memeImg" src="" alt="meme" />
        <canvas></canvas>
      </main>
    </div>
  );
}

export default App;
