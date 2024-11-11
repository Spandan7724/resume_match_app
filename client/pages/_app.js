// pages/_app.js

import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import createEmotionCache from '../utils/createEmotionCache';

// Create a client-side cache for Emotion
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>JobPortal</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                {/* Preconnect to Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                {/* Roboto font for Material UI */}
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline applies a global reset */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
    emotionCache: PropTypes.object,
};
