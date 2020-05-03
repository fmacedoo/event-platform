import { string } from 'prop-types';
import React from 'react';

import { H4 } from '@qrt/atoms/typography';
import Container from '@qrt/atoms/container';
import Grid from '@qrt/atoms/grid';
import Spacer from '@qrt/atoms/spacer';

import Media from '@qrt/molecules/media';
import SectionTitle from '@qrt/molecules/section-title';

const mock = new Array(8).fill({}).map(o => ({
    image:
        'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    subtitle: 'Categoria',
    title: 'Expositor',
}));

export default function Expositores({ id, items = mock }) {
    return (
        <Container box id={id}>
            <H4 text="Expositores" />
            <Spacer size="l" />
            <SectionTitle />
            <Spacer size="l" />
            <Grid items={items} columns={4} gap={4}>
                {(item, i) => <Media key={i} {...item} />}
            </Grid>
        </Container>
    );
}

Expositores.propTypes = {
    id: string,
};
