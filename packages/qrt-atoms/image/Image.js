/* eslint-disable jsx-a11y/alt-text */
import { string } from 'prop-types';
import React from 'react';

export default function Image({ src, title, className }) {
    return <img src={src} title={title} className={className} />;
}

Image.propTypes = {
    src: string,
    title: string,
};
