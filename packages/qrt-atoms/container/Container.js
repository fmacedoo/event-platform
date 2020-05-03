import { bool, node } from 'prop-types';
import React from 'react';

import classnames from 'classnames/bind';
import Styles from './Container.css';

const cx = classnames.bind(Styles);

export default function Container({ black, box, children }) {
    return (
        <div className={cx(Styles.container, { black: !!black })}>
            {(box && <div className={Styles.box}>{children}</div>) || children}
        </div>
    );
}

Container.propTypes = {
    black: bool,
    box: bool,
    children: node,
};
