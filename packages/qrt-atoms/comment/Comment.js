import React from 'react';

import Image from '@qrt/atoms/image';
import Typography from '@qrt/atoms/typography';

import Styles from './Comment.css';

export default function Comment({ image, name, comment }) {
    return (
        <span className={Styles.comment}>
            <span>
                <Image src={image} class={Styles.image} />
            </span>
            <span className={Styles.content}>
                <Typography text={name} font="bold" size="xs" color="grey" />
                <Typography
                    text={comment}
                    font="normal"
                    size="xs"
                    color="black"
                />
            </span>
        </span>
    );
}
