// utils/createEmotionCache.js

import createCache from '@emotion/cache';

// This utility creates an instance of Emotion cache.
export default function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}
