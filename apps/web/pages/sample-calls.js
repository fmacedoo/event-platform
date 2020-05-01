import { array, object } from 'prop-types';
import { useState } from 'react';

import api from '@qrt/sdks';

import Typography from '@qrt/atoms/typography';
import { withLayout } from 'components/layout';

async function fetchFromCMS(api) {
    return await Promise.all([
        api.content.news.get(),
        api.content.events.by(1).get(),
    ]);
}

function HomePage({ initialNews, initialEvent }) {
    const [news, setNews] = useState(initialNews);
    const [event, setEvent] = useState(initialEvent);

    async function reload() {
        setNews([]);
        setEvent({ title: 'fetching data at client' });
        const [news, event] = await fetchFromCMS(api);
        setNews(news);
        setEvent(event);
    }

    return (
        <div>
            <Typography text="EVENT APP PEGN" />
            <h4>EVENT {event.title}</h4>
            <h4>NEWS</h4>
            <ul>
                {news.map(o => (
                    <li>{o.title}</li>
                ))}
            </ul>
            <br />
            <button onClick={() => reload()}>RELOAD</button>
        </div>
    );
}

HomePage.getInitialProps = async ({ api }) => {
    const [news, event] = await fetchFromCMS(api);

    return {
        initialNews: news,
        initialEvent: event,
    };
};

HomePage.propTypes = {
    initialNews: array,
    initialEvent: object,
};

HomePage.defaultProps = {
    initialNews: [],
    initialEvent: {},
};

export default withLayout(HomePage);
