import React, { useState } from 'react';

const Uploader = (props) => {
	const [file, setFile] = useState(null);

	const handleChange = (event) => {
		setFile(URL.createObjectURL(event.target.files[0]));
	};

	return (
		<div>
			<input type="file" onChange={(event) => handleChange(event)} />
			<img src={file} />
		</div>
	);
};

export default Uploader;
