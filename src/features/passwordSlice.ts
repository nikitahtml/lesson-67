import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
    input: string;
    isValid: boolean | null;
}

const initialState: PasswordState = {
    input: '',
    isValid: null,
};

const correctPassword = '1415';

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
        removeCharacter: (state) => {
            state.input = state.input.slice(0, -1);
        },
        checkPassword: (state) => {
            state.isValid = state.input === correctPassword;
        },
        resetPassword: (state) => {
            state.input = '';
            state.isValid = null;
        },
    },
});

export const { addCharacter, removeCharacter, checkPassword, resetPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
