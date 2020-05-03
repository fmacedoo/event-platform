import { string } from 'prop-types';
import React from 'react';

import { H4 } from '@qrt/atoms/typography';
import Anchor from '@qrt/atoms/anchor';
import Spacer from '@qrt/atoms/spacer';
import Stamp from '@qrt/atoms/stamp';

import Styles from './MediaHighlight.css';

export default function MediaHighlight({ title, subtitle, image, url }) {
    const Wrapper = url ? Anchor : 'div';
    return (
        <Wrapper
            className={Styles.mediaHighlight}
            style={{ '--media-highlight-image': `url('${image}')` }}
            href={url}
            target="_blank"
        >
            <div className={Styles.info}>
                <Stamp text={subtitle} />
                <Spacer size="s" />
                <H4
                    text={title}
                    color="white"
                    size="xl"
                    align="left"
                    transform="uppercase"
                />
            </div>
        </Wrapper>
    );
}

MediaHighlight.propTypes = {
    title: string,
    subtitle: string,
    image: string,
};

MediaHighlight.defaultProps = {
    title: '',
    subtitle: '',
    image: '',
};
