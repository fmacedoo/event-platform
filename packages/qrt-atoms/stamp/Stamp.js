import { string } from 'prop-types';
import React from 'react';

import { Span } from '@qrt/atoms/typography';

import Styles from './Stamp.css';

export default function Stamp({ text, size }) {
    return (
        <Span
            className={Styles.stamp}
            font="condensed"
            size={size}
            color="white"
            text={text}
        />
    );
}

Stamp.propTypes = {
    text: string,
    size: string,
};

Stamp.defaultProps = {
    size: 's',
};
