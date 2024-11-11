// pages/_document.js

import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../styles/theme';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Set the primary color for the browser theme */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    {/* Inject Emotion's critical CSS */}
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// Implement getInitialProps to extract Emotion's critical CSS
MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    // Create an instance of Emotion cache
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    // Enhance the app to collect styles
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
        });

    // Get the initial document props
    const initialProps = await Document.getInitialProps(ctx);

    // Extract the critical CSS
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
