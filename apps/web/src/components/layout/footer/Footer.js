import Image from '@qrt/atoms/image';
import Menu from '@qrt/molecules/menu';

import Styles from './Footer.css';

const mockUrl = 'https://via.placeholder.com/300x100';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.content}>
                <Image className={Styles.logo} src={mockUrl} />
                <Menu logo={mockUrl} />
            </div>
        </div>
    );
}
