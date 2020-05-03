import { func, string } from 'prop-types';
import React, { useState } from 'react';

export const Image = ({ src, alt, fallback, ...props }) => {
    const [error, setError] = useState(!src);
    const [loaded, setLoaded] = useState(!src);

    return (
        <>
            <img
                {...props}
                alt={alt}
                src={src}
                style={{
                    display: (!loaded && src) || !src ? 'none' : 'block',
                }}
                onError={() => setError(true)}
                onLoad={() => setLoaded(true)}
            />
            {(!loaded || error) && fallback && fallback()}
        </>
    );
};

Image.propTypes = {
    src: string,
    alg: string,
    fallback: func,
};

Image.defaultProps = {
    src: '',
    alt: '',
};

export default Image;
