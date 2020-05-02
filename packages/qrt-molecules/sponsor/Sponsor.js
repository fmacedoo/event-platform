import { string } from 'prop-types';
import React from 'react';

import Image from '@qrt/atoms/image';
import Typography from '@qrt/atoms/typography';

import Styles from './Sponsor.css';

export default function Sponsor({ image, title, description }) {
    return (
        <section className={Styles.sponsor}>
            <Image src={image} title={title} />
            <Typography text={title} />
            <Typography text={description} />
        </section>
    );
}

Sponsor.propTypes = {
    image: string,
    title: string,
    description: string,
};

// a mock
Sponsor.defaultProps = {
    image: 'http://localhost:1337/uploads/small_petland_203b53a610.jpeg',
    title: 'Petland',
    description: `This is a description of my sponsor`,
};
