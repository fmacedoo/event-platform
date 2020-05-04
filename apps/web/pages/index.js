import { array } from 'prop-types';
import { withLayout } from 'components/layout';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';
import Newsletter from '@qrt/organisms/newsletter';
import Videos from '@qrt/organisms/videos';
import LiveVideo from '@qrt/organisms/live-video';

async function fetchFromCMS(api) {
    return api.content.news.get();
}

const defaultNews = {
    image:
        'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    subtitle: 'Food Service',
    title: 'Saiba mais sobre os food services',
};

function HomePage({ news }) {
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

    return (
        <>
            <Expositores id="expositores" />
            <Materias id="materias" {...selectedMaterias} />
            <Newsletter id="newsletter" />
            <LiveVideo id="live-video" />
            <Videos id="videos" />
        </>
    );
}

HomePage.getInitialProps = async ({ api }) => {
    const news = await fetchFromCMS(api);

    return {
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
