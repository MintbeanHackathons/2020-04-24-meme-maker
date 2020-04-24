import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageEditor from './components/ImageEditor';

function App() {
	const [imgURL, setImgURL] = useState(null);
	const [uploaded, setUploaded] = useState(false);

	const handleUpload = (event) => {
		setImgURL(URL.createObjectURL(event.target.files[0]));
		console.log(event.target.files[0]);
		setUploaded(true);
	};

	const fileUploader = (
		<div class="file">
			<label class="file-label">
				<input
					type="file"
					className="file-input"
					onChange={(event) => handleUpload(event)}
				/>
				<span class="file-cta">
					<span class="file-icon">
						<i class="fas fa-upload"></i>
					</span>
					<span class="file-label">Choose a file…</span>
				</span>
			</label>
		</div>
	);
	return (
		<div className="App">
			<div className="container has-text-centered">
				<h1 className="title is-1 is-spaced">CAN YOU MEME IT?</h1>

				{uploaded ? <ImageEditor imgURL={imgURL} /> : fileUploader}
			</div>
		</div>
	);
}

export default App;
