import React, { useState } from 'react';
import Meme from './meme';

const Editor = ({ template }) => {

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div style={editorStyles}>
      {template && (
        <>
        <div contentEditable={true}>
          <Meme template={template} chosen={true} />
          <text y='2em'>{topText}</text>
          <text x='4em'>{bottomText}</text>
        </div>
          <input
            placeholder='Top Text'
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <input
            placeholder='Bottom Text'
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
        </>
      )}
    </div>
  )
}

export default Editor

export const editorStyles = {
  border: 'solid 2px #485460',
  borderRadius: '12px',
  width: '67%',
  height: '82vh',
  position: 'absolute',
  right: '7%',
  bottom: '4%',
  display: 'flex',
  padding: '1em'
}