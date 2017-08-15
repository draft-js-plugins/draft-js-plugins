import urlRegex from 'url-regex';
import prependHttp from 'prepend-http';

export default {
  isUrl(text) {
    return urlRegex().test(text);
  },

  normalizeUrl(url) {
    return prependHttp(url);
  }
};
