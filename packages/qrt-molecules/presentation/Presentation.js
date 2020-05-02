import { string } from 'prop-types';
import React from 'react';

import Image from '@qrt/atoms/image';
import Typography from '@qrt/atoms/typography';

import Styles from './Presentation.css';

export default function Presentation({ title, thumbnail, description }) {
    return (
        <section className={Styles.presentation}>
            <Image
                className={Styles.presentationImage}
                src={thumbnail}
                title={title}
            />
            <Typography text={title} />
            <Typography text={description} />
        </section>
    );
}

Presentation.propTypes = {
    thumbnail: string,
    title: string,
    description: string,
};

// a mock
Presentation.defaultProps = {
    thumbnail: 'http://localhost:1337/uploads/small_petland_203b53a610.jpeg',
    title: 'Petland',
    description: `This is a description of my sponsor`,
};
