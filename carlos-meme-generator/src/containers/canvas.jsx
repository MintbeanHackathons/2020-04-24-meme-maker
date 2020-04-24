import React from 'react';

const Canvas = ({imageUrl, textTop, textBottom}) => {
  return(
    <div>
      <svg height="300">
        <image href={imageUrl} height="300"></image>
        <text y="2em">{textTop}</text>
        <text y="2em">{textBottom}</text>
      </svg>
    </div>
  );
}

export default Canvas