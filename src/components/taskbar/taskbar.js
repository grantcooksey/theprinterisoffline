import React from 'react';
import { Bar, AppBar, Toolbar, Button, List, ListItem, Divider } from 'react95';
import icons from '@react95/icons';

const appBarStyle = {
    top: "auto",
    bottom: 0
};

function Menu() {
    const [open, setOpen] = React.useState(false);
  
    function handleClick() {
        setOpen(!open);
    }
  
    function handleClose() {
        setOpen(false);
    }
  
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
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
        </div>
    );
  }

function TaskBar() {
    return (
        <footer>
        <AppBar style={ appBarStyle }>
            <Toolbar>
                <Menu />
                <Bar />
                    <Button variant="menu">Edit</Button>
                    <Button variant="menu" disabled>Save</Button>
                <Bar />
            </Toolbar>
        </AppBar>
        </footer>
    );
};

export default TaskBar;