import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Keypad from './components/Keypad';
import PasswordDisplay from './components/PasswordDisplay';
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <PasswordDisplay />
                <Keypad />
            </div>
        </Provider>
    );
};

export default App;
