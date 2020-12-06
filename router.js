const express = require('express');

function translateRouter(translateFunc) {
  const router = express.Router();
  router.route('/translate')
    .post(async (req, res) => {
      if (!req.body) return res.sendStatus(400);

      const { text, language: { from, to } } = req.body;
      const { translated, didYouMean, fromLanguage } = await translateFunc(text, from, to);

      const result = {
        translated,
        fromLanguage,
      };

      if (didYouMean) result.didYouMean = didYouMean;

      return res.send(JSON.stringify(result));
    });
  return router;
}

module.exports = translateRouter;
