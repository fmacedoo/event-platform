import { string, func } from 'prop-types';
import React from 'react';

import Typography from '@qrt/atoms/typography';

import Styles from './Button.css';

export default function Button({ text, typography, onClick }) {
    return (
        <button type="button" className={Styles.button} onClick={onClick}>
            <Typography text={text} size="s" font="condensed" {...typography} />
        </button>
    );
}

Button.propTypes = {
    text: string,
    onClick: func,
};
