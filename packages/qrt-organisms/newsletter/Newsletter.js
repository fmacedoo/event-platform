import { string } from 'prop-types';
import React from 'react';

import { Span } from '@qrt/atoms/typography';
import Button from '@qrt/atoms/button';
import Field from '@qrt/atoms/field/Field';
import Image from '@qrt/atoms/image';
import Spacer from '@qrt/atoms/spacer';
import TextBlock from '@qrt/atoms/text-block';

import Styles from './Newsletter.css';

export default function Newsletter({ id }) {
    return (
        <div id={id} className={Styles.newsletter}>
            <div className={Styles.announce}>
                <div className={Styles.column}>
                    <Span text="Assine" color="white" font="bold" size="2xl" />
                    <Image src="/logo.png" />
                    <Span
                        text="E tenha acesso as edições anteriores"
                        color="white"
                        font="bold"
                        size="l"
                    />
                    <div>
                        <Span text="R$" color="black" size="2xl" font="bold" />
                        <Span text="1,99" color="black" size="8xl" font="bold" />
                        <Span text="/mês" color="black" size="2xl" font="bold" />
                    </div>
                    <div>
                        <Span text="por " color="white" />
                        <Span text="3 meses" color="white" font="bold" />
                    </div>
                    <Spacer size="m" />
                    <Button text="Assinar" large />
                </div>
            </div>
            <div className={Styles.form}>
                <div className={Styles.column}>
                    <TextBlock>
                        <Span
                            text="Assine a nossa newsletter e assista à palestras gratuitamente."
                            size="2xl"
                            font="bold"
                        />
                    </TextBlock>
                    <Spacer size="m" />
                    <Field placeholder="Nome" />
                    <Spacer size="s" />
                    <Field placeholder="E-Mail" />
                    <Spacer size="m" />
                    <Button text="Assinar" large />
                </div>
            </div>
        </div>
    )
}

Newsletter.propTypes = {
    id: string,
};
