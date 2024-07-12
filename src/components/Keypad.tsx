import React from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter, removeCharacter, checkPassword } from '../features/passwordSlice';

const Keypad: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = (value: string) => {
        if (value === '<') {
            dispatch(removeCharacter());
        } else if (value === 'E') {
            dispatch(checkPassword());
        } else {
            dispatch(addCharacter(value));
        }
    };

    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'];

    return (
        <div className="keypad">
            {buttons.map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Keypad;
