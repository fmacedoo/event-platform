import { string } from 'prop-types';

import React from 'react';
import Anchor from '@qrt/atoms/anchor';
import Button from '@qrt/atoms/button';
import Styles from './Menu.css';

export default function Menu({ logo }) {
    const assignClick = () => {
        React.alert('Em Breve!');
    };

    return (
        <span className={Styles.menu}>
            <Anchor
                text="Expositores"
                typography={{
                    color: 'white',
                    font: 'condensed',
                    size: 's',
                }}
            />
            <Anchor
                text="Matérias"
                typography={{
                    color: 'white',
                    font: 'condensed',
                    size: 's',
                }}
            />
            <Anchor
                text="Palestras"
                typography={{
                    color: 'white',
                    font: 'condensed',
                    size: 's',
                }}
            />
            <Anchor
                href=""
                text="Vídeos"
                typography={{
                    color: 'white',
                    font: 'condensed',
                    size: 's',
                }}
            />
            <Button text="Assine" onClick={assignClick} />
        </span>
    );
}

Menu.propTypes = {
    logo: string,
};
