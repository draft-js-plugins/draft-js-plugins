const rawData = {
  "entityMap": {
    "0": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "href": "https://github.com/draft-js-plugins/draft-js-plugins"
      }
    },
    "1": {
      "type": "LINK",
      "mutability": "MUTABLE",
      "data": {
        "href": "https://github.com/draft-js-plugins/blob/draft-js-link-plugin/src/components/Link/index.js"
      }
    }
  },
  "blocks": [{
    "key": "1kn1f",
    "text": "This text contains links which are decorated by the default link component",
    "type": "unstyled",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [{
      "offset": 19,
      "length": 5,
      "key": 0
    }, {
      "offset": 52,
      "length": 22,
      "key": 1
    }],
    "data": {}
  }]
};

export default rawData;
