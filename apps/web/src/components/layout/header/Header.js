import Image from '@qrt/atoms/image';
import Menu from '@qrt/molecules/menu';

import Styles from './Header.css';

const mockUrl = 'https://via.placeholder.com/250x60';

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <Image className={Styles.logo} src={mockUrl} />
                <Menu logo={mockUrl} />
            </div>
        </div>
    );
}
