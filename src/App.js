import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const AppStyle = styled.div`
    background: 'red';
`;

function App() {
    return (
        <AppStyle className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>src / App.js</p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </AppStyle>
    );
}

export default App;
