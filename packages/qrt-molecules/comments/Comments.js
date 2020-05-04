import { useState } from 'react';

import Comment from '@qrt/atoms/comment';
import Field from '@qrt/atoms/field';
import Button from '@qrt/atoms/button';

import Styles from './comments.css';

const names = ["Thiago Ramalho", "Felipe Macedo", "Bruno Windrop", "Lee Majors"];
const description = ['Palestra muito boa!! Parabéns', 'Tá interassante', 'vc vai falar sobre delivery?', 'Quando vai ser a próxima?']

const mock = new Array(5).fill({}).map((o, i) => ({
    id: i,
    image:
        'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
    name: names[Math.floor(Math.random() * names.length)],
    comment: description[Math.floor(Math.random() * description.length)],
}));

export default function Comments() {
    const [mocks, setMocks] = useState(mock);
    const [comment, setComment] = useState('');

    function addComment() {
        const text = comment;
        const list = mocks;

        list.push({
            id: list.length + 1,
            image:
                'https://s2.glbimg.com/FdHDOZkFfz75c7TCpcgtjrwwJGE=/408x324/smart/e.glbimg.com/og/ed/f/original/2019/02/05/gustavo.png',
            name: 'Thiago Ramalho',
            comment: text,
        });

        // por algum motivo essa porra não reload
        setMocks(list);
    }

    return (
        <div className={Styles.comments}>
            <div>
                {mocks.map(item => (
                    <Comment key={item.id} {...item} />
                ))}
            </div>
            <div>
                <Field
                    placeholder="Add comment"
                    className={Styles.addComment}
                    onChange={e => {
                        setComment(e.target.value);
                    }}
                    value={comment}
                />
                <Button text="Enviar" onClick={() => addComment()} />
            </div>
        </div>
    );
}
