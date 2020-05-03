import { withLayout } from 'components/layout';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';

function HomePage() {
    return (
        <>
            <Expositores />
            <Materias />
        </>
    );
}

HomePage.getInitialProps = {};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withLayout(HomePage);
