import { object, string } from 'prop-types';
import React from 'react';

import { H4 } from '@qrt/atoms/typography';
import Container from '@qrt/atoms/container';
import Spacer from '@qrt/atoms/spacer';

import Media from '@qrt/molecules/media';
import MediaHighlight from '@qrt/molecules/media-highlight/MediaHighlight';
import SectionTitle from '@qrt/molecules/section-title';

import Styles from './Materias.css';

export default function Materias({ id, first, second, third }) {
    return (
        <Container black box id={id}>
            <H4 text="Materias" color="orange" />
            <Spacer size="l" />
            <SectionTitle />
            <Spacer size="l" />
            <div className={Styles.materias}>
                <div className={Styles.materia}>
                    <MediaHighlight {...first} />
                    <Spacer size="xl" />
                    <MediaHighlight {...second} />
                </div>
                <div className={Styles.materia}>
                    <MediaHighlight {...third} />
                </div>
            </div>
        </Container>
    );
}

Materias.propTypes = {
    id: string,
    first: object,
    second: object,
    third: object,
};
