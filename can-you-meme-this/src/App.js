import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageEditor from './components/ImageEditor';

function App() {
	const [imgURL, setImgURL] = useState(null);

	const handleUpload = (event) => {
		setImgURL(URL.createObjectURL(event.target.files[0]));
		console.log(event.target.files[0]);
	};

	return (
		<div className="App">
			<div>
				<input type="file" onChange={(event) => handleUpload(event)} />
			</div>

			<ImageEditor imgURL={imgURL} />
		</div>
	);
}

export default App;
