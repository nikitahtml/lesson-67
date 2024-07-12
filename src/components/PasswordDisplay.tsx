import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PasswordDisplay: React.FC = () => {
    const { input, isValid } = useSelector((state: RootState) => state.password);

    const display = input.padEnd(4, '*').split('').map((char, index) => (
        <span key={index}>{char === '*' ? '•' : '*'}</span>
    ));

    let displayClass = '';
    let message = '';

    if (isValid === true) {
        displayClass = 'valid';
        message = 'Access Granted';
    } else if (isValid === false) {
        displayClass = 'invalid';
        message = 'Access Denied';
    }

    return (
        <div className={`password-display ${displayClass}`}>
            {display}
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default PasswordDisplay;
