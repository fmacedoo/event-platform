import React from 'react';

import { Span } from '@qrt/atoms/typography';
import { Anchor } from '@qrt/atoms/anchor/Anchor';

import Styles from './SectionTitle.css';

export default function SectionTitle() {
    return (
        <div className={Styles.sectionTitle}>
            <Span text="Apoie o negócio local" color="grey" />
            <Anchor
                text="Conheça mais ideias"
                href="http://www.google.com.br/"
                typography={{ color: 'orange' }}
            />
        </div>
    )
}
