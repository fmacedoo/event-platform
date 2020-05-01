import React from 'react';
import { string } from 'prop-types';

import Typography from '@qrt/atoms/typography';
import SingleImage from '@qrt/atoms/singleImage';

import Styles from './Sponsor.css'

export default function Sponsor(props) {
    return <section className={Styles.sponsorCard}>
        <SingleImage src={props.image} title={props.title} />
        <Typography text={ props.title } />
        <Typography text={ props.description } />
    </section>
    ;
}

Sponsor.propTypes = {
    image: string,
    title: string,
    description: string,
};

// a mock
Sponsor.defaultProps = {
    image: "http://localhost:1337/uploads/small_petland_203b53a610.jpeg",
    title: "Petland",
    description: `This is a description of my sponsor`,
}
