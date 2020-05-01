import React from 'react';
import { string } from 'prop-types';

export default function SingleImage(props) {
    return <img src={props.src} title={props.title} className={props.className}/>
    ;
}

SingleImage.defaultProps = {
    src: string,
    title: string,
};
