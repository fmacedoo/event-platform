import React from 'react';

import scrollTo from 'shared/scroll-to';

import Anchor from '@qrt/atoms/anchor';
import Button from '@qrt/atoms/button';

import classnames from 'classnames/bind';
import Styles from './Menu.css';

const cx = classnames.bind(Styles);

export default function Menu() {
    const menuItems = [
        {
            text: 'Expositores',
            href: 'expositores',
        },
        {
            text: 'Matérias',
            href: 'materias',
        },
        {
            text: 'Palestras',
            href: 'newsletter',
        },
        {
            text: 'Vídeos',
            href: 'videos',
        },
    ];

    return (
        <span className={Styles.menu}>
            {menuItems.map(item => (
                <Anchor
                    key={item.text}
                    className={cx(Styles.item, Styles.anchor)}
                    text={item.text}
                    onClick={() => scrollTo(item.href)}
                    typography={{
                        color: 'white',
                        font: 'condensed',
                        size: 's',
                    }}
                />
            ))}
            <Button
                className={Styles.item}
                text="Assine"
                onClick={() => scrollTo('newsletter')}
            />
        </span>
    );
}
