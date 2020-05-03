import React from 'react';

import Styles from './Field.css';

export default function Field({ placeholder }) {
    return (
        <input
            className={Styles.field}
            type="text"
            placeholder={placeholder}
        />
    );
}
