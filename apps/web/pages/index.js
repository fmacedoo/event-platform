import { withLayout } from 'components/layout';

import Typography from '@qrt/atoms/typography';
import Container from '@qrt/atoms/container';

function HomePage() {
    return (
        <Container>
            <Typography text="CONTENT" />
        </Container>
    );
}

HomePage.getInitialProps = {};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withLayout(HomePage);
