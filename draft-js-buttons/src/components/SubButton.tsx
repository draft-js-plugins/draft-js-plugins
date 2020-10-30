import React from 'react';
import createInlineStyleButton from '../utils/createInlineStyleButton';

export default createInlineStyleButton({
  style: 'SUBSCRIPT',
  children: (
    <div>
      x<sub>2</sub>
    </div>
  ),
});
