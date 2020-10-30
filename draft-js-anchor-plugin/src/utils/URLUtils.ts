import prependHttp from 'prepend-http';
import urlRegex from './urlRegex';
import mailRegex from './mailRegex';

export default {
  isUrl(text: string): boolean {
    return urlRegex().test(text);
  },

  isMail(text: string): boolean {
    return mailRegex().test(text);
  },

  normaliseMail(email: string): string {
    if (email.toLowerCase().startsWith('mailto:')) {
      return email;
    }
    return `mailto:${email}`;
  },

  normalizeUrl(url: string): string {
    return prependHttp(url);
  },
};
