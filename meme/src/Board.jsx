import React, { useState, useEffect, useRef } from "react";
import FormContent from './FormContent'
import FormStyle from './FormStyle'
import "./App.css";

const dw = 500;
const dh = 500;

function Board() {
  const [img, setImage] = useState("../initImg.png");
  const [textTop, setTextTop] = useState("");
  const [textBotton, setTextBotton] = useState("");
  const [file, setFile] = useState();
  const [weight, setWeight] = useState("bold")
  const [size, setSize] = useState("3em")
  const [color, setColor] = useState("black")

  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const image = new Image();
    context.clearRect(0, 0, dw, dh);
    context.font = `${weight} ${size} sans-serif`;
    context.fillStyle = color;
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

  const handleStyle = ({target: {id, value}}) => {
    id === "color" && setColor(value)
    id === "size" && setSize(value)
    id === "weight" && setWeight(value)
  }


  return (
    <>
      <canvas id="canvas" ref={canvas} width={dw} height={dh} />
      <div className="form">
      <FormContent textTop={textTop} textBotton={textBotton} handleText={handleText} handleImg={handleImg} file={file}/>
      <FormStyle color={color} size={size} weight={weight} handleStyle={handleStyle}/>
      </div>
    </>
  );
}

export default Board;
