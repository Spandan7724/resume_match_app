// pages/_app.js
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    // Customize your theme here
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            {/* Add any global components like Navbar here */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
