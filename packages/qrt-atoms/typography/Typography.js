import { string } from 'prop-types';
import React from 'react';

export default function Typography({ text = 'Typography' }) {
    return <span>{text}</span>;
}

Typography.defaultProps = {
    text: string,
};
