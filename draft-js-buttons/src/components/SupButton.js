import React from 'react';
import createInlineStyleButton from '../utils/createInlineStyleButton';

export default createInlineStyleButton({
  style: 'SUPERSCRIPT',
  children: (
    <div>
      x<sup>2</sup>
    </div>
  ),
});
