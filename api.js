const api = require('@vitalets/google-translate-api');

async function translate(text, from, to) {
  let translated;
  let didYouMean;
  let fromLanguage;

  try {
    const res = await api(text, { from, to });
    translated = res.text;
    didYouMean = res.from.language.didYouMean;
    fromLanguage = res.from.language.iso;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error translating from: ${from} to: ${to} -- ${error}`);
  }
  return { translated, didYouMean, fromLanguage };
}

module.exports = translate;
