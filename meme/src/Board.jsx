import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const dw = 500;
const dh = 500;

function Board() {
  const [img, setImage] = useState("../initImg.png");
  const [textTop, setTextTop] = useState("");
  const [textBotton, setTextBotton] = useState("");
  const [file, setFile] = useState();

  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const image = new Image();
    context.clearRect(0, 0, dw, dh);
    context.font = "bold 3em sans-serif";

    context.fillText(textTop, 0, 50);
    context.fillText(textBotton, 0, dh - 50);

    image.src = img;
    image.onload = () => {
      context.drawImage(image, dw / 5, 80, dw - 200, dh - 200);
    };
    const can = document.getElementById("canvas");
    const url = can.toDataURL("image/png");
    setFile(url);
  }, [img, textTop, textBotton]);

  const handleImg = ({ target: { files } }) =>
    setImage(URL.createObjectURL(files[0]));

  const handleText = ({ target: { value, id } }) =>
    id === "top" ? setTextTop(value) : setTextBotton(value);


  return (
    <>
      <canvas id="canvas" ref={canvas} width={dw} height={dh} />
      <div>
        <p>Add top text</p>
        <input id="top" type="text" value={textTop} onChange={handleText} />
        <p>Add botton text</p>
        <input
          id="botton"
          type="text"
          value={textBotton}
          onChange={handleText}
        />
        <p>Add your image</p>
        <input type="file" onChange={handleImg} />
        <a download="image.png" href={file}>DOWNLOAD</a>
      </div>
    </>
  );
}

export default Board;
