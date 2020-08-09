import React from 'react';
import PropTypes from 'prop-types';

const Test = props => {
    return (
        <>
            <p>Test</p>
        </>
    )
};

Test.propTypes = {
	/** Button label */
	children: PropTypes.node.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	size: PropTypes.oneOf(['lol', 'meme', 'large']),
	/** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};

Test.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};

Test.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};

export default Test;
