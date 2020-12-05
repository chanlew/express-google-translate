const express = require('express');
const bodyParser = require('body-parser');
const translate = require('@vitalets/google-translate-api');

const server = express();
const port = process.env.PORT || 3000;

async function doTranslate(text, from, to) {
  let translated;
  try {
    const res = await translate(text, { from, to });
    translated = res.text;
  } catch (error) {
    translated = text;
  }
  return translated;
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server
  .listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express is listening on port ${port}!`);
  });

server
  .get('/', (req, res) => {
    res.send('REST api implemented with Node.js & Express to perform a Google translation');
  })
  .post('/translate', async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { text, language: { from, to } } = req.body;
    const translated = await doTranslate(text, from, to);

    return res.send(JSON.stringify({ translated }));
  });
