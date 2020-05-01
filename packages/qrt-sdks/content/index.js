import events from './events';
import news from './news';

export default (isServer, baseURL = '', createClient) => {
    const url = isServer ? baseURL : '/api';
    const client = createClient(url);

    return {
        events: events(client),
        news: news(client),
    };
};
