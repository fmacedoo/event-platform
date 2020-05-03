import { object } from 'prop-types';
import React from 'react';

import { H4 } from '@qrt/atoms/typography';
import Container from '@qrt/atoms/container';
import Spacer from '@qrt/atoms/spacer';

import Media from '@qrt/molecules/media';
import MediaHighlight from '@qrt/molecules/media-highlight/MediaHighlight';
import SectionTitle from '@qrt/molecules/section-title';

import Styles from './Materias.css';

const mock = new Array(8).fill({}).map((o, i) => ({
    image: 'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    subtitle: 'Categoria' + i,
    title: 'Título da matéria',
}));

export default function Materias({ first, second, third }) {
    return (
        <Container black box>
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
    first: object,
    second: object,
    third: object,
};

Materias.defaultProps = {
    first: mock[0],
    second: mock[1],
    third: mock[2],
};
