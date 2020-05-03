import { withLayout } from 'components/layout';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';
import Newsletter from '@qrt/organisms/newsletter';
import Videos from '@qrt/organisms/videos';

function HomePage() {
    return (
        <>
            <Expositores id="expositores" />
            <Materias id="materias" />
            <Newsletter id="newsletter" />
            <Videos id="videos" />
        </>
    );
}

HomePage.getInitialProps = {};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withLayout(HomePage);
