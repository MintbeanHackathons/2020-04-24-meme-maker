import React from 'react';

const Canvas = ({imageUrl, textTop, textBottom}) => {
  return(
    <div>
      <svg height="300">
        <image x="50%" y="50%" href={imageUrl} height="250" width="250" transform="translate(-125,-125)"></image>
        
        <text x="50%" y="2em" textAnchor="middle">{textTop}</text>
        <text x="50%" y="280px" textAnchor="middle">{textBottom}</text>
      </svg>
    </div>
  );
}

export default Canvas