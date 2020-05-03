import { node, oneOf, string } from 'prop-types';
import React from 'react';

import Styles from './TextBlock.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(Styles);

export const TextBlock = ({ className, children, align }) => (
    <div className={cx(Styles.textBlock, className, { [align]: !!align })}>{children}</div>
);

TextBlock.propTypes = {
    className: string,
    children: node,
    align: oneOf(['start', 'center', 'justify', 'end']),
};

TextBlock.defaultProps = {
    align: 'center',
};

export default TextBlock;
