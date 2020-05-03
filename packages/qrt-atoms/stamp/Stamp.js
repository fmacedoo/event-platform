/* eslint-disable jsx-a11y/alt-text */
import { string } from 'prop-types';
import React from 'react';

import { Span } from '@qrt/atoms/typography';

import Styles from './Stamp.css';

export default function Stamp({ text }) {
    return (
        <Span
            className={Styles.stamp}
            font="condensed"
            size="xs"
            color="white"
            text={text}
        />
    );
}

Stamp.propTypes = {
    text: string,
};
