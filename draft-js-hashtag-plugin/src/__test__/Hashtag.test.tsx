import React from 'react';
import { render } from '@testing-library/react';
import Hashtag from '../Hashtag';

describe('Hashtag', () => {
  it('applies the className based on the theme property `hashtag`', () => {
    const theme = { hashtag: 'custom-class-name' };
    const { container } = render(<Hashtag theme={theme} />);
    expect(container.firstChild).toHaveAttribute('class', 'custom-class-name');
  });

  it('applies any custom passed prop', () => {
    const { container } = render(<Hashtag data-custom="unicorn" />);
    expect(container.firstChild).toHaveAttribute('data-custom', 'unicorn');
  });

  it('renders the passed in children', () => {
    const { container } = render(<Hashtag>#longRead</Hashtag>);

    expect(container.firstChild).toHaveTextContent('#longRead');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = { hashtag: 'custom-class-name' };
    const { container } = render(<Hashtag theme={theme} className="hashtag" />);
    expect(container.firstChild).toHaveAttribute(
      'class',
      'custom-class-name hashtag'
    );
  });
});
