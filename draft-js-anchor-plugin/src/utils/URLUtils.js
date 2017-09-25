import prependHttp from 'prepend-http';
import urlRegex from './urlRegex';

export default {
  isUrl(text) {
    return urlRegex().test(text);
  },

  normalizeUrl(url) {
    return prependHttp(url);
  }
};
