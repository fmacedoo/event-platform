import { func, node, object, oneOf, string } from 'prop-types';
import React from 'react';

import Typography from '@qrt/atoms/typography';

import classnames from 'classnames/bind';
import Styles from './Anchor.css';

const cx = classnames.bind(Styles);

const TypographyStyles = {
    selectable: {
        size: 'l',
        font: 'condensed',
        transform: 'uppercase',
    },
    outline: {
        font: 'condensed',
        transform: 'uppercase',
    },
    filled: {
        color: 'white',
        font: 'condensed',
        transform: 'uppercase',
    },
};

export const Anchor = React.forwardRef(function Anchor(
    { text, variant, href, className, children, typography, onClick, ...rest },
    ref
) {
    const classes = {
        anchor: true,
        [variant]: !!variant,
        hover: !!text,
    };

    return (
        <a
            className={cx(classes, className)}
            ref={ref}
            {...rest}
            onClick={onClick}
        >
            {text ? (
                <Typography
                    size="s"
                    text={text}
                    {...TypographyStyles[variant]}
                    {...typography}
                />
            ) : (
                children
            )}
        </a>
    );
});

Anchor.propTypes = {
    text: string,
    variant: oneOf(['default', 'selectable', 'filled', 'outline']),
    href: string,
    className: string,
    children: node,
    typography: object,
    onClick: func,
};

Anchor.defaultProps = {
    variant: 'default',
    className: '',
    typography: {},
};

export default Anchor;
