// TODO allow to take a promise for mentions data as well
// TODO make sure in case no link exists it becomes not an anchor tag
// TODO change handle to name? not sure
// TODO add profilepics/icons
// TODO only show/use images if all mentions have images
// TODO use unicorns for the unicorn editor

import { fromJS } from 'immutable';

const mentions = fromJS([
  {
    handle: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    handle: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://pbs.twimg.com/profile_images/705714058939359233/IaJoIa78_400x400.jpg',
  },
  {
    handle: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/681114454029942784/PwhopfmU_400x400.jpg',
  },
  {
    handle: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg',
  },
]);

// const mentions = fromJS([
//   { handle: 'Matthew Russell', link: 'https://twitter.com/mrussell247' },
//   { handle: 'Jyoti Puri', link: 'https://twitter.com/jyopur' },
//   { handle: 'Max Stoiber', link: 'https://twitter.com/mxstbr' },
//   { handle: 'Nik Graf', link: 'https://twitter.com/nikgraf' },
// ]);

// const mentions = fromJS([
//   { handle: 'Matthew Russell' },
//   { handle: 'Jyoti Puri' },
//   { handle: 'Max Stoiber' },
//   { handle: 'Nik Graf' },
// ]);

export default mentions;
