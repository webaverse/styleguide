import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntInput } from 'antd';
import 'antd/dist/antd.min.css'
import '../../mulish-fonts/fonts.css'

const styles = {
    input: {
        borderRadius: 8,
    }
}

const Input = props => {
    return <AntInput {...props} style={styles.input} />
}

Input.propTypes = {
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string
}

Input.defaultProps = {
    onChange: (e) => console.log('your typing in me', e),
    onPressEnter: (e) => console.log('you pressed enter on me', e),
    size: 'middle',
    disabled: false,
    defaultValue: '',
    maxLength: 100,
    placeholder: 'Type inside me...'
}

export default Input;
