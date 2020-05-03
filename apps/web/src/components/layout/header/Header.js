import Menu from '@qrt/molecules/menu';

import Styles from './Header.css';

const mockUrl = 'https://via.placeholder.com/250x60';

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <span>...</span>
                <Menu logo={mockUrl} />
                <span className={Styles.item}>Search</span>
            </div>
        </div>
    );
}
