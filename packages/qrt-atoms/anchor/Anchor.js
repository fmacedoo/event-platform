import { func, node, object, string } from 'prop-types';
import React from 'react';

import Typography from '@qrt/atoms/typography';

import classnames from 'classnames/bind';
import Styles from './Anchor.css';

const cx = classnames.bind(Styles);

export default function Anchor({
    text,
    href,
    className,
    children,
    typography,
    onClick,
    ...rest
}) {
    return (
        <a className={cx(className)} href={href} {...rest} onClick={onClick}>
            {text ? (
                <Typography size="s" text={text} {...typography} />
            ) : (
                children
            )}
        </a>
    );
}

Anchor.propTypes = {
    text: string,
    href: string,
    className: string,
    children: node,
    typography: object,
    onClick: func,
};

Anchor.defaultProps = {
    className: '',
    typography: {},
};
