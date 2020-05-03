import Menu from '@qrt/molecules/menu';

import Styles from './Footer.css';

const mockUrl = 'https://via.placeholder.com/300x100';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.content}>
                <Menu logo={mockUrl} />
            </div>
        </div>
    );
}
