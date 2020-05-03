import { string } from 'prop-types';
import React from 'react';

export const Image = ({ src, alt, ...props }) => {
    return (
        <>
            <img {...props} alt={alt} src={src} />
        </>
    );
};

Image.propTypes = {
    src: string,
    alt: string,
};

Image.defaultProps = {
    src: '',
    alt: '',
};

export default Image;
