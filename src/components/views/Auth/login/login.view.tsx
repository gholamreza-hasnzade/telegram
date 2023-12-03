/* import React from 'react' */

import { Button, TextField } from "@mui/material";

export const LoginView = () => {
    return (
        <div>
            <TextField
                sx={{
                    height: "15px",
                }}
                label="text"
                placeholder="test"
            />
            <Button variant="outlined">Button</Button>
        </div>
    );
};
