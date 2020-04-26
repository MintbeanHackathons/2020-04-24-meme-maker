import React, { useState, useEffect, useRef } from 'react';
import Link from 'react-dom';
import Canvas from './containers/canvas';
import Inputs from './containers/inputs';

function App() {
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [imageUrl, setImageUrl] = useState("data:image/jpeg;base64,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");
  const [canvasUpdated, setCanvasUpdated] = useState(false);
  const svg = useRef();
  const img = useRef();
  const canvas = useRef();
  const anchor = useRef();

  useEffect(() => {
    const updateImage = async () => {
      const xml = new XMLSerializer().serializeToString(svg.current);
      
      // make it base64
      const svg64 = btoa(xml);
      const b64Start = 'data:image/svg+xml;base64,';
      
      // prepend a "header"
      const image64 = await b64Start + svg64;
      
      // set it as the source of the img element
      img.current.src = "";
      img.current.src = image64;
      console.log("image");
      setCanvasUpdated(!canvasUpdated);
    }
    updateImage();
    
  }, [svg, topText, bottomText, imageUrl])

  const drawCanvas = () => {
    // draw the image onto the canvas
    let ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.drawImage(img.current, 0, 0);
    console.log('canvas');
    let dt = canvas.current.toDataURL('image/png'); // << this fails in IE/Edge...
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
    anchor.current.href = dt
  }


  const handleChange = (event) => {
    if (event.target.name === "top"){
      setTopText(event.target.value)
    } else if (event.target.name === "imageUrl"){
      setImageUrl(event.target.value)
    } else{
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
                imageUrl={imageUrl}
                textTop={topText}
                textBottom={bottomText}
                svgRef={svg}
              />
            </div>
            <div className="col-6">
              <Inputs
                topText={topText}
                bottomText={bottomText}
                imageUrl={imageUrl}
                handleChange={handleChange}
              />
              <button onClick={drawCanvas}>Generate Image</button>
              <a ref={anchor} download="Canvas.png" href="#">download</a>
            </div>
          </div>
        </div>
        <canvas ref={canvas} width="300px" height="300px"></canvas>
        <img ref={img} src="" alt="meme" />
      </main>
    </div>
  );
}

export default App;
