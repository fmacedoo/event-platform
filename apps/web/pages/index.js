import { array } from 'prop-types';
import { withLayout } from 'components/layout';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';
import Newsletter from '@qrt/organisms/newsletter';
import Videos from '@qrt/organisms/videos';
import LiveVideo from '@qrt/organisms/live-video';

async function fetchFromCMS(api) {
    return api.content.events.get();
}
async function fetchNews(api) {
    return api.content.news.get();
}

const defaultNews = {
    image:
        'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    subtitle: 'Food Service',
    title: 'Saiba mais sobre os food services',
};

function HomePage({ event, news }) {
    const materias = news.map(o => ({
        image: o.img,
        title: o.title,
        subtitle: o.time,
        url: o.url,
    }));

    const selectedMaterias = {
        first: materias.shift() || defaultNews,
        second: materias.shift() || defaultNews,
        third: materias.shift() || defaultNews,
    };


    const sponsors = event.sponsors.map(o => ({
        image: o.imageUrl,
        subtitle: o.tags,
        title: o.name,
        url: o.url,
    }));

    const presentations = event.presentations.map(o => ({
        image: o.thumbUrl,
        subtitle: o.title,
        title: o.tags,
        url: o.url,
    }));

    return (
        <>
            <Expositores id="expositores" items={sponsors} />
            <Materias id="materias" {...selectedMaterias} />
            <Newsletter id="newsletter" />
            <LiveVideo id="live-video" />
            <Videos id="videos" items={presentations} />
        </>
    );
}

HomePage.getInitialProps = async ({ api }) => {

    const events = await fetchFromCMS(api);
    const news = await fetchNews(api);

    const event = events[0];

    return {
        event,
        news,
    };
};

HomePage.propTypes = {
    news: array,
};

HomePage.defaultProps = {
    news: [],
};

export default withLayout(HomePage);
