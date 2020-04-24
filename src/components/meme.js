import React, { useState } from 'react'

const Meme = ({ template, onClick, chosen }) => {

  const [test, setTest] = useState('')

  return (
    <div style={{margin: 0, padding: 0}}>
      <img
        style={ chosen ? template.height/template.width > 1 ? { width: 350, transform: 'scale(0.6, 0.6)' } : { width: 350 } : { width: 200, transform: 'scale(0.8, 0.8)' }}
        key={template.id}
        src={template.url}
        alt={template.name}
        onClick={onClick}
      />
    </div>
  )
}

export default Meme

