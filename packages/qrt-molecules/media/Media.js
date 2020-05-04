import React from 'react';

import { Span } from '@qrt/atoms/typography';

import Anchor from '@qrt/atoms/anchor';
import Image from '@qrt/atoms/image';
import Styles from './Media.css';

export default function Media({ title, subtitle, image, url, fontColor }) {
    const handleClick = () => {
        window.open(url);
    };

    return (
        <div className={Styles.media}>
            <Anchor onClick={handleClick}>
                <Image className={Styles.image} src={image} />
            </Anchor>
            <Span text={title} size="l" color="orange" />
            <Span text={subtitle} font="bold" color={fontColor} size="2xl" />
        </div>
    );
}

Media.defaultProps = {
    fontColor: 'black',
};
