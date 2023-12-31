import React from 'react';

// props
// state
// children

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', 
					border: '1px solid rgba(132, 215, 225, 0.5)', 
					height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;
