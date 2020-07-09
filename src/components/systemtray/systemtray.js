import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cutout } from 'react95';

const clockConfig = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
};

const SystemTrayStyle = styled.div`
    display: flex;
    padding: 0px 15px 0px 5px;
    height: 100%;
    line-height: 27px;
`;

function SystemTray() {
    const [currentDate, setDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDate(date => new Date());
      }, 60000);

      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
        <Cutout style={{ "height": "35px" }}>
            <SystemTrayStyle>
                { currentDate.toLocaleTimeString([], clockConfig) }
            </SystemTrayStyle>
        </Cutout>
    );
};

export default SystemTray;