import React from "react";

function FormContent({textTop, textBotton, handleText, handleImg, file}) {
  return (
    <div>
        <h2>CONTENT</h2>
      <p>Add top text</p>
      <input id="top" type="text" value={textTop} onChange={handleText} />
      <p>Add botton text</p>
      <input id="botton" type="text" value={textBotton} onChange={handleText} />
      <p>Add your image</p>
      <input type="file" onChange={handleImg} />
      <a download="image.png" href={file}>
        DOWNLOAD
      </a>
    </div>
  );
}

export default FormContent;
