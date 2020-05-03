import { array, func, number, string } from 'prop-types';
import React from 'react';

import cx from 'classnames';
import Styles from './Grid.css';

export const Grid = ({
    className,
    items = [],
    columns,
    gap,
    children,
    dataTest,
}) => {
    const styles = [
        columns && { '--columns': columns },
        gap && { '--gap': `${gap}rem` },
    ].reduce((ac, c) => ({ ...ac, ...c }), {});

    return (
        <div
            className={cx(Styles.grid, className)}
            data-testid={dataTest}
            style={styles}
        >
            {items.map(children)}
        </div>
    );
}

Grid.propTypes = {
    children: func.isRequired,
    items: array,
    columns: number,
    gap: number,
    className: string,
    dataTest: string,
};

export default Grid;
