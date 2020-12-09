# express-google-translate
Demo REST service API wrapper of a Google translate package (@vitalets/google-translate-api)

# Introduction
This project illustrates a proxy service using a RESTful API to make a Google translation call.

Based on the NPM package https://www.npmjs.com/package/@vitalets/google-translate-api.

# Technologies
Node.js, Express, JavaScript

# Install
To run this project, clone to a local directory,
```
$ npm install
$ npm start
```

# Usage
As an example, to translate text from French to English, POST to http://localhost:3000/api/translate
with this JSON message:
```
{
    "language": {
        "from": "fr",
        "to": "en"
    },
    "text": "C'est simple comme bonjour!"
}
```

Results:
```
{"translated":"It's simple as hello !","fromLanguage":"fr"}
```

The from-language may be omitted for the language to be auto detected. For example, POSTing this message:
```
{
    "language": {
        "to": "en"
    },
    "text": "Mettre les points sur les i"
}
```

will produce result:
```
{"translated":"Put the dots on the I","fromLanguage":"fr"}
```
