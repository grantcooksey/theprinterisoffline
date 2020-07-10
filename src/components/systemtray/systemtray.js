import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cutout, Button, Window, WindowHeader, WindowContent } from 'react95';
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
    position: relative;
`;

const TrayIcon = styled.img`
    height: 85%;
`;

const AlertIcon = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 50%;
`;

function SystemTray() {
    const [currentDate, setDate] = useState(new Date());

    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

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
                    {open && (
                    <Window style={{ width: 300, position: "absolute", right: "0", transform: "translate(0, -100%)"}}>
                        <WindowHeader
                            style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            }}
                        >
                            <span>A Message From The Printer</span>
                            <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} onClick={handleClose} square>
                                <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            <p>You have a print job pending!</p>
                            <p>The printer appears to be offline...</p>
                        </WindowContent>
                    </Window>
                    )}
                    <Button variant="menu" style={{ "height": "100%", "position": "relative" }} active={open} onClick={handleClick}>
                        <TrayIcon src={ icons.print } alt="printer"></TrayIcon>
                        <AlertIcon src={ icons.warning } alt="warning"></AlertIcon>
                    </Button>
                </SystemTrayItem>
            </SystemTrayStyle>
        </Cutout>
    );
};

export default SystemTray;