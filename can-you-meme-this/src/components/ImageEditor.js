import React, { useState } from 'react';
const ImageEditor = (props) => {
	const [topText, setTopText] = useState('');
	const [bottomText, setBottomText] = useState('');

	return (
		<div>
			<form>
				<label> top text</label>
				<input
					type="text"
					value={topText}
					onChange={(e) => setTopText(e.target.value)}
				/>

				<label>bottom text</label>
				<input
					type="text"
					value={bottomText}
					onChange={(e) => setBottomText(e.target.value)}
				/>
			</form>
			<svg height="600" width="600">
				<image height="600" width="600" href={props.imgURL} />
				<text
					x="50%"
					y="10%"
					textAnchor="middle"
					dominantBaseline="middle"
					style={textStyle}
				>
					{topText}
				</text>
				<text
					x="50%"
					y="90%"
					textAnchor="middle"
					dominantBaseline="middle"
					style={textStyle}
				>
					{bottomText}
				</text>
			</svg>
		</div>
	);
};

const textStyle = {
	fontFamily: 'Impact',
	fontSize: '50px',
	textTransform: 'uppercase',
	fill: '#FFF',
	stroke: '#000',
	userSelect: 'none',
};
export default ImageEditor;
