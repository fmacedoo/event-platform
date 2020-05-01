import createClient from './http-client';
import content from './content';

export const createSDK = (isServer, baseURL) => {
    return {
        content: content(isServer, baseURL, createClient),
    };
};

export const api = createSDK();

export default api;
