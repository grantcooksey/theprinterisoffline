import React from 'react';
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const Code = styled.span`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`;

const AppStyle = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <AppStyle>
      <AppHeader>
        <div>
        <AppLogo src={logo} alt="logo" />
        </div>
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppStyle>
  );
}

export default App;
