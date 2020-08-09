import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.min.css'
import { Button as AntButton } from 'antd';

const Button = props => {
    return <AntButton {...props}>{props.text}</AntButton>
}

Button.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.string,
    shape: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
}

Button.defaultProps = {
    onClick: event => console.log('button click', event),
    size: 'middle',
    shape: 'square',
    type: 'primary',
    disabled: false,
    loading: false
}

export default Button;
