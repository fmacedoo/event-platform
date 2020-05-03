import { bool, func, string } from 'prop-types';
import React from 'react';

import Typography from '@qrt/atoms/typography';

import classnames from 'classnames/bind';
import Styles from './Button.css';

const cx = classnames.bind(Styles);

export default function Button({
    className,
    text,
    large,
    typography,
    onClick,
}) {
    return (
        <button
            type="button"
            className={cx(Styles.button, className, { large: !!large })}
            onClick={onClick}
        >
            <Typography text={text} size="s" font="condensed" {...typography} />
        </button>
    );
}

Button.propTypes = {
    className: string,
    text: string,
    large: bool,
    onClick: func,
};
