import { withLayout } from 'components/layout';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';
import Newsletter from '@qrt/organisms/newsletter';

function HomePage() {
    return (
        <>
            <Expositores />
            <Materias />
            <Newsletter />
        </>
    );
}

HomePage.getInitialProps = {};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withLayout(HomePage);
