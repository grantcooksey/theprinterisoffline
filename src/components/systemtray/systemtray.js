import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cutout, Button } from 'react95';
import icons from '@react95/icons';

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
    flex-direction: row-reverse;
`;

const SystemTrayItem = styled.div`
    padding: 0px 5px;
`;

const TrayIcon = styled.img`
    height: 85%;
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
                <SystemTrayItem>
                    <p>{ currentDate.toLocaleTimeString([], clockConfig) }</p>
                </SystemTrayItem>
                <SystemTrayItem>
                    <Button variant="menu" style={{ "height": "100%" }}>
                        <TrayIcon src={ icons.print } alt="printer"></TrayIcon>
                    </Button>
                </SystemTrayItem>
            </SystemTrayStyle>
        </Cutout>
    );
};

export default SystemTray;