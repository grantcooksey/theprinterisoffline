import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useClippy, ClippyProvider, AGENTS } from '@react95/clippy';

const ClippyStyle = styled.div`
    position: absolute;
    bottom: 200px;
    right: 20%;
`;

const MyComponent = () => {
    const { clippy } = useClippy();

    useEffect(() => {
        const interval = setInterval(() => {
            // clippy.play('Wave')
            clippy.speak("Hey Trace, did you make sure the printer is plugged in?")
        }, 10000);
  
        return () => {
          clearInterval(interval);
        };
      });

    return (<div></div>);  // no-op
};

function Desktop() {
    return (
        <ClippyStyle>
            <ClippyProvider agentName={AGENTS.CLIPPY}>
                <MyComponent />
            </ClippyProvider>
        </ClippyStyle>
    );
};

export default Desktop;