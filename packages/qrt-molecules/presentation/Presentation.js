import React from 'react';
import { string, object } from 'prop-types';

import Typography from '@qrt/atoms/typography';
import SingleImage from '@qrt/atoms/singleImage';

import Styles from './Presentation.css'

export default function Presentation(props) {
    return <section className={Styles.presentationCard}>
        <SingleImage className={Styles.presentationCardImage} src={props.thumbnail} title={props.title} />
        <Typography text={ props.title } />
        <Typography text={ props.description } />
    </section>
    ;
}

Presentation.propTypes = {
    url: string,
    thumbnail: string,
    title: string,
    title: string,
    description: object,
};

// a mock
Presentation.defaultProps = {
    url: "https://www.youtube.com/channel/UCqPGjSuTqlbu172I1hkgmZw",
    thumbnail: "http://localhost:1337/uploads/small_petland_203b53a610.jpeg",
    title: "Petland",
    description: `This is a description of my sponsor`,
    speaker:{
        name:"Thiago Ramalho"
    }
}
