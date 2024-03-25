import { Box, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
    return (
        <Box
         bgcolor="lightcoral" 
         flex={2} 
         p={2}
         sx={{display: {xs: "none", sm: "block"}}}
        >
            <Typography variant="h3" component="p" color="white">
            RIGHT BAR
            </Typography>
        </Box>
    );
};

export default Rightbar;