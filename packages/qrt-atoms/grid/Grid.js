import { array, func, number, string } from 'prop-types';
import React from 'react';

import cx from 'classnames';
import Styles from './Grid.css';

export const Grid = ({
    className,
    items = [],
    columns,
    children,
    dataTest,
}) => (
    <div
        className={cx(Styles.grid, className)}
        data-testid={dataTest}
        style={columns && { '--columns': columns }}
    >
        {items.map(children)}
    </div>
);

Grid.propTypes = {
    children: func.isRequired,
    items: array,
    columns: number,
    className: string,
    dataTest: string,
};

export default Grid;
