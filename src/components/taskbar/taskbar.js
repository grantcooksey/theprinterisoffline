import React from 'react';
import styled from 'styled-components';
import { Bar, AppBar, Toolbar, Button } from 'react95';
import Menu from '../menu';
import SystemTray from '../systemtray';

const appBarStyle = {
    top: "auto",
    bottom: 0
};

const ApplicationsStyle = styled.div`
    display: flex;
`;

function TaskBar() {
    return (
        <AppBar style={ appBarStyle }>
            <Toolbar style={{ "justifyContent": "space-between" }}>
                <ApplicationsStyle>
                    <Menu />
                    <Bar />
                    <Button variant="menu">Edit</Button>
                    <Button variant="menu" disabled>Save</Button>
                    <Bar />
                </ApplicationsStyle>
                <SystemTray />
            </Toolbar>
        </AppBar>
    );
};

export default TaskBar;