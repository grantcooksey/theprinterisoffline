import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, List, ListItem, Divider } from 'react95';
import icons from '@react95/icons';

const MenuStyle = styled.div`
    position: relative;
    display: inline-block;
    padding-right: 4px;
`;

function Menu() {
    const [open, setOpen] = useState(false);

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
};

export default Menu;