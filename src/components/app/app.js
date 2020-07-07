import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { reset, themes } from 'react95';
import Desktop from '../desktop';
import TaskBar from '../taskbar';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const AppStyle = styled.div`
    background-color: rgb(17, 128, 128);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <div>
            <ResetStyles />
            <ThemeProvider theme={ themes.default }>
                <AppStyle>
                    <Desktop />
                    <TaskBar />
                    <div>tests</div>
                </AppStyle>
            </ThemeProvider>
        </div>
    );
};

export default App;
