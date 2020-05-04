import React from 'react';

import { Span } from '@qrt/atoms/typography';
import Anchor from '@qrt/atoms/anchor';

import Styles from './SectionTitle.css';

export default function SectionTitle({ title, more }) {
    return (
        <div className={Styles.sectionTitle}>
            <Span text={title} color="grey" font="bold" />
            <Anchor
                text={more}
                href="http://www.google.com.br/"
                typography={{ color: 'orange', font: 'bold' }}
            />
        </div>
    )
}
