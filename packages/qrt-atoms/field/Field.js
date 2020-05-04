import React from 'react';

import Styles from './Field.css';

export default function Field({
    placeholder,
    className,
    onClick,
    onChange,
    value,
}) {
    return (
        <input
            className={className || Styles.field}
            type="text"
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
            value={value}
        />
    );
}
