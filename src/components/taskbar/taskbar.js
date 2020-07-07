import React from 'react';
import { Bar, AppBar, Toolbar, Button } from 'react95';

function TaskBar() {
    return (
        <div>
        <AppBar>
            <Toolbar>
            <Bar />
                <Button variant="menu">Edit</Button>
                <Button variant="menu" disabled>Save</Button>
            <Bar />
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default TaskBar;