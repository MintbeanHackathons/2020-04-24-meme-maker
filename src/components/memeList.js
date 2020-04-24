import React from 'react';
import Meme from './meme'

const MemeList = ({ memes, setTemplate }) => {
  return (
    <div style={memeListStyles}>
      {memes.map(template => {
        return (
          <Meme
            template={template}
            onClick={() => {
              setTemplate(template);
            }}
          />
        );
      })}
    </div>
  )
}

export default MemeList

export const memeListStyles = {
  display: 'flex',
  width: '20%',
  flexDirection: 'column',
  overflowY: 'auto',
  alignSelf: 'baseline',
  marginBottom: '2em',
  justifyContent: 'flex-start'
}