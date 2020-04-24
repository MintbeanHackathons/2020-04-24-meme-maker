import React, { useState } from 'react';

const ImageEditor = (props) => {
	return (
		<div>
			<svg height="600" width="600">
				<image height="600" width="600" href={props.imgURL} />
			</svg>
		</div>
	);
};

export default ImageEditor;
