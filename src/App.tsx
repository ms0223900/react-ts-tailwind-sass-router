import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ID } from 'common-types';
import Card from 'components/Card';

function App() {
    const id: ID = 1;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className={'font-bold text-red-800'}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Learn React' + id}
                </a>
                <Card />
            </header>
        </div>
    );
}

export default App;
