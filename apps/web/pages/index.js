import Typography from '@qrt/atoms/typography';
import { withLayout } from 'components/layout';

function HomePage() {
    return (
        <div>
            <Typography text="Welcome to Quarentine-Bootstrap.js!" />
        </div>
    );
}

export default withLayout(HomePage);
