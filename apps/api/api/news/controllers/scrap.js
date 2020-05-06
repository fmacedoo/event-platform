const { parse } = require('node-html-parser');
const fetch = require('fetch').fetchUrl;

const URL = 'https://revistapegn.globo.com/busca?q=food+service';

const cleanupURL = url => decodeURIComponent(url.replace(/.+http/gm, 'http'));

async function getPEGN() {
    return new Promise(resolve =>
        fetch(URL, (_error, _meta, body) => resolve(body.toString()))
    );
}

async function scrapPEGN() {
    const scrap = await getPEGN();
    const root = parse(scrap);

    const materiasHTML = root.querySelectorAll(`.busca-materia-padrao`);

    const data = materiasHTML.map(materiaHTML => {
        const anchorTitulo = materiaHTML.querySelector('.cor-produto');

        const title = anchorTitulo.getAttribute('title');
        const url = cleanupURL(anchorTitulo.getAttribute('href'));
        const time = materiaHTML
            .querySelector('.busca-tempo-decorrido')
            .text.replace(/\n/g, '')
            .trim();
        const img = cleanupURL(
            materiaHTML
                .querySelector('.busca-link-url')
                .querySelector('img')
                .getAttribute('src')
        );
        const description = materiaHTML.querySelector('.busca-highlight').text;
        const descriptionRaw = materiaHTML.querySelector('.busca-highlight').innerHTML;

        return {
            title,
            url,
            time,
            img,
            description,
            descriptionRaw,
        };
    });

    return data;
}

module.exports = scrapPEGN;
