import { bool, node, oneOf, oneOfType, string } from 'prop-types';

import cx from 'classnames';
import Styles from './Typography.css';

const FONTS = {
    bold: Styles.bold,
    condensed: Styles.condensed,
    normal: Styles.normal,
};
const COLORS = {
    black: Styles.black,
    orange: Styles.orange,
    white: Styles.white,
    grey: Styles.grey,
};
const ALIGN = {
    left: Styles.left,
    center: Styles.center,
    right: Styles.right,
};
const TRANSFORMS = {
    none: Styles.transformNone,
    lowercase: Styles.transformLower,
    uppercase: Styles.transformUpper,
};
const VARIANTS = {
    h1: { tag: 'h1', size: '4xl' },
    h2: { tag: 'h2', size: '3xl' },
    h3: { tag: 'h3', size: '2xl' },
    h4: { tag: 'h4', size: 'xl' },
    h5: { tag: 'h5', size: 'l' },
    h6: { tag: 'h6', size: 'm' },
    span: { tag: 'span' },
    label: { tag: 'label' },
    p: { tag: 'p' },
    default: { tag: 'span' },
};
const SIZES = {
    '4xl': Styles['xxxxl'],
    '3xl': Styles['xxxl'],
    '2xl': Styles['xxl'],
    xl: Styles['xl'],
    l: Styles['l'],
    m: Styles['m'],
    s: Styles['s'],
    xs: Styles['xs'],
};
const UNDERLINE = {
    default: Styles.underline,
    hover: Styles.underlineHover,
};

export default function Typography({
    text,
    children,
    variant,
    className,
    underline,
    size,
    align,
    font,
    color,
    transform,
    dataTest,
}) {
    const underlineOption = underline === true ? 'default' : underline;
    const { tag: Tag, size: TagSize } = VARIANTS[variant] || VARIANTS.default;
    const classes = [
        Styles.typography,
        SIZES[TagSize] || SIZES[size],
        TRANSFORMS[transform],
        FONTS[font],
        COLORS[color],
        ALIGN[align],
        className,
        UNDERLINE[underlineOption],
    ];
    const props = dataTest ? { 'data-testid': `Label_${dataTest}` } : {};

    return (
        <Tag className={cx(classes)} {...props}>
            {text || children}
        </Tag>
    );
}

Typography.propTypes = {
    text: string,
    variant: oneOf(Object.keys(VARIANTS)),
    size: oneOf(Object.keys(SIZES)),
    transform: oneOf(Object.keys(TRANSFORMS)),
    font: oneOf(Object.keys(FONTS)),
    align: oneOf(Object.keys(ALIGN)),
    color: oneOf(Object.keys(COLORS)),
    className: string,
    underline: oneOfType([bool, oneOf(Object.keys(UNDERLINE))]),
    children: node,
    dataTest: string,
};

Typography.defaultProps = {
    text: '',
    variant: 'default',
    underline: false,
};
