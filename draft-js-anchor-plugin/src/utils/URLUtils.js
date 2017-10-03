import prependHttp from 'prepend-http';
import urlRegex from './urlRegex';
import mailRegex from './mailRegex';

export default {
  isUrl(text) {
    return urlRegex().test(text);
  },

  isMail(text) {
    return mailRegex().test(text);
  },

  normaliseMail(email) {
    if (email.toLowerCase().startsWith('mailto:')) {
      return email;
    }
    return `mailto:${email}`;
  },

  normalizeUrl(url) {
    return prependHttp(url);
  }
};
