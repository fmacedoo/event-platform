import { bool, node } from 'prop-types';
import React from 'react';

import classnames from 'classnames/bind';
import Styles from './ContainerBox.css';

const cx = classnames.bind(Styles);

export default function ContainerBox({ black, children }) {
    return (
        <div className={cx(Styles.containerBox, { black: !!black })}>
            {children}
        </div>
    )
}

ContainerBox.propTypes = {
    black: bool,
    children: node,
};
