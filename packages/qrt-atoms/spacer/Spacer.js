import { oneOf } from 'prop-types';
import React from 'react';

import Styles from './Spacer.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(Styles);

export const Spacer = ({ size }) => <div className={cx({ [`spacer-${size}`]: true })}></div>;

Spacer.propTypes = {
    size: oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),
};

Spacer.defaultProps = {
    size: 'm',
};

export default Spacer;
