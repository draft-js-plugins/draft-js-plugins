// TODO allow to take a promise for mentions data as well
// TODO make sure in case no link exists it becomes not an anchor tag
// TODO change handle to name? not sure
// TODO add profilepics/icons
// TODO only show/use images if all mentions have images
// TODO use unicorns for the unicorn editor

import { fromJS } from 'immutable';

const mentions = fromJS([
  { handle: 'Matthew Russell', link: 'https://twitter.com/mrussell247' },
  { handle: 'Jyoti Puri', link: 'https://twitter.com/jyopur' },
  { handle: 'Max Stoiber', link: 'https://twitter.com/mxstbr' },
  { handle: 'Nik Graf', link: 'https://twitter.com/nikgraf' },
]);

export default mentions;
