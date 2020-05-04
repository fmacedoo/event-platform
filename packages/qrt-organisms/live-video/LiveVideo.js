import { string } from 'prop-types';
import React from 'react';

import { H4 } from '@qrt/atoms/typography';
import Container from '@qrt/atoms/container';

import Spacer from '@qrt/atoms/spacer';

import PlayVideo from '@qrt/atoms/play-video';

import Comments from '@qrt/molecules/comments';
import SectionTitle from '@qrt/molecules/section-title';

import Styles from './LiveVideo.css';

const mock = new Array(8).fill({}).map(o => ({
    image:
        'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    subtitle: 'Categoria',
    title: 'Palestrante',
}));

export default function LiveVideo({ id, items = mock }) {
    return (
        <Container box id={id}>
            <H4 text="Palestra Ao Vivo" color="orange" />
            <Spacer size="l" />
            <SectionTitle />
            <Spacer size="l" />
            <div className={Styles.containerPlay}>
                <PlayVideo />
                <Comments />
            </div>
        </Container>
    );
}

LiveVideo.propTypes = {
    id: string,
};
