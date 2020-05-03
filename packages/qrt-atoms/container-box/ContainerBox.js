import { node } from 'prop-types';
import React from 'react';

import Styles from './ContainerBox.css';

export default function ContainerBox({ children }) {
    return <div className={Styles.containerBox}>{children}</div>;
}

ContainerBox.propTypes = {
    children: node,
};
