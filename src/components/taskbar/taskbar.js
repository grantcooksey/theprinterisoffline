import React from 'react';
import styled from 'styled-components';
import { Bar, AppBar, Toolbar, Button, List, ListItem, Divider, Cutout } from 'react95';
import icons from '@react95/icons';

const appBarStyle = {
    top: "auto",
    bottom: 0
};

const MenuStyle = styled.div`
    position: relative;
    display: inline-block;
    padding-right: 4px;
`;

const ApplicationsStyle = styled.div`
    display: flex;
`;

const ClockBlockStyle = styled.div`
    display: flex;
    padding: 0px 20px 0px 5px;
    height: 100%;
    line-height: 27px;
`;

function Menu() {
    const [open, setOpen] = React.useState(false);
  
    function handleClick() {
        setOpen(!open);
    }
  
    function handleClose() {
        setOpen(false);
    }
  
    return (
        <MenuStyle>
            {open && (
            <List horizontalAlign="left" verticalAlign="top" open={open} onClick={handleClose}>
                <ListItem><span role="img" aria-label="person behind computer">👨‍💻</span> About Me</ListItem>
                <ListItem><span role="img" aria-label="eye">👁</span> About You</ListItem>
                <Divider />
                <ListItem disabled><span role="img" aria-label="back arrow">🔙</span> Logout</ListItem>
            </List>
            )}
            <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
            <img src={ icons.user_1 } alt="Windows logo"></img>
            Start
            </Button>
        </MenuStyle>
    );
  }

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
                <Cutout style={{ "height": "35px" }}>
                    <ClockBlockStyle>yo
                    </ClockBlockStyle>
                </Cutout>
            </Toolbar>
        </AppBar>
    );
};

export default TaskBar;