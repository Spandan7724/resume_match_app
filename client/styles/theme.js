// styles/theme.js

import { createTheme } from '@mui/material/styles';

// Create a custom theme for your application
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize this color to match your branding
        },
        secondary: {
            main: '#dc004e', // Customize this color as needed
        },
    },
    typography: {
        // You can customize typography here
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;
