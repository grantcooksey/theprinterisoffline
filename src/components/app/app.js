import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { reset, themes } from 'react95';
import Desktop from '../desktop';
import TaskBar from '../taskbar';

const ResetStyles = createGlobalStyle`
    ${reset}
    body {
        overflow: hidden;
    }

    /* HACK I can't figure out how to target clippy */
    .clippy {
        position: absolute;
        top: 200px !important;
        right: 80px !important;
    }
`;

const AppStyle = styled.div`
    background-color: rgb(17, 128, 128);
    min-height: 100vh;
`;

function App() {
    return (
        <div>
            <ResetStyles />
            <ThemeProvider theme={ themes.default }>
                <AppStyle>
                    <Desktop />
                    <TaskBar />
                </AppStyle>
            </ThemeProvider>
        </div>
    );
};

export default App;
