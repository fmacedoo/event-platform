import { withLayout } from 'components/layout';

import Container from '@qrt/atoms/container';

import Expositores from '@qrt/organisms/expositores';
import Materias from '@qrt/organisms/materias';

function HomePage() {
    return (
        <Container>
            <Expositores />
            <Materias />
        </Container>
    );
}

HomePage.getInitialProps = {};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withLayout(HomePage);
