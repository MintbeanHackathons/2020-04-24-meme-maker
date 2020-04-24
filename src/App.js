import React, { useState, useEffect } from 'react';
import './App.css';
import MemeList from './components/memeList';
import Editor from './components/editor';

function App() {

  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

  return (
    <div className="App">
      <h1>Meme generator</h1>
      <h2 style={{alignSelf: 'baseline', marginLeft: '2.5em'}}>Pick a template</h2>
      <MemeList memes={templates} setTemplate={setTemplate}/>
      <Editor template={template}/>
    </div>
  );
}

export default App;
