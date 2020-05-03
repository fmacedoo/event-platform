import React from 'react';

import ContainerBox from '@qrt/atoms/container-box';
import Grid from '@qrt/atoms/grid/Grid';

const mock = new Array(8).fill({}).map(o => ({ image: '', category: 'Categoria', name: 'Expositor' }));

export default function Expositores({ items = mock }) {
    return (
        <ContainerBox>
            <Grid items={items} columns={4}>
                {
                    (item, i) => <div key={i}>{item.name}</div>
                }
            </Grid>
        </ContainerBox>
    )
}
