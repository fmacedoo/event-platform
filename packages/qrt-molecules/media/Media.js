import React from 'react';

import { Span } from '@qrt/atoms/typography';
import Image from '@qrt/atoms/image';

import Styles from './Media.css';

export default function Media({ title, subtitle, image, fontColor }) {
    return (
        <div className={Styles.media}>
            <Image className={Styles.image} src={image} />
            <Span text={title} size="l" color="orange" />
            <Span text={subtitle} font="bold" color={fontColor} size="2xl" />
        </div>
    );
}

Media.defaultProps = {
    fontColor: 'black',
};
