/* eslint-disable jsx-a11y/anchor-has-content,react/no-children-prop */

import React from 'react';
import { render } from '@testing-library/react';
import LinkifyIt from 'linkify-it';
import Link from '../Link';

describe('Link', () => {
  it('applies the className based on the theme property `link` and property', () => {
    const theme = { link: 'custom-class-name' };
    const { getByRole } = render(
      <Link theme={theme} className="link">
        Link
      </Link>
    );
    const link = getByRole('link');
    expect(link).toHaveClass('custom-class-name');
    expect(link).toHaveClass('link');
    expect(link).toHaveAttribute('target', '_self');
  });

  it('applies any custom passed prop', () => {
    const { getByRole } = render(<Link data-custom="unicorn">Link</Link>);
    expect(getByRole('link')).toHaveAttribute('data-custom', 'unicorn');
  });

  it('renders the passed in children', () => {
    const { getByRole } = render(
      <Link>https://www.draft-js-plugins.com/</Link>
    );
    expect(getByRole('link')).toHaveTextContent(
      'https://www.draft-js-plugins.com/'
    );
  });

  it('uses the decoratedText prop as href', () => {
    const { getByRole } = render(
      <Link decoratedText="https://www.draft-js-plugins.com/">Link</Link>
    );
    expect(getByRole('link')).toHaveAttribute(
      'href',
      'https://www.draft-js-plugins.com/'
    );
  });

  it('applies http prefix when none is supplied', () => {
    const { getByRole } = render(
      <Link decoratedText="draft-js-plugins.com/">Link</Link>
    );
    expect(getByRole('link')).toHaveAttribute(
      'href',
      'http://draft-js-plugins.com/'
    );
  });

  it('does not apply a prefix when one is already supplied', () => {
    const { getByRole } = render(
      <Link decoratedText="ftp://draft-js-plugins.com/">Link</Link>
    );
    expect(getByRole('link')).toHaveAttribute(
      'href',
      'ftp://draft-js-plugins.com/'
    );
  });

  it('generates correct href to localhost with port', () => {
    const { getByRole } = render(
      <Link decoratedText="http://localhost:8000">Link</Link>
    );
    expect(getByRole('link')).toHaveAttribute('href', 'http://localhost:8000');
  });

  it('generates mailto href when supplied with email', () => {
    const { getByRole } = render(
      <Link decoratedText="name@example.com">Link</Link>
    );
    expect(getByRole('link')).toHaveAttribute(
      'href',
      'mailto:name@example.com'
    );
  });

  it('generates the correct href when using a custom exreactLinks funcation', () => {
    const { getByRole } = render(
      <Link
        decoratedText="example@me.com"
        customExtractLinks={() =>
          LinkifyIt().set({ fuzzyEmail: false }).match('example@me.com')
        }
      >
        Link
      </Link>
    );
    expect(getByRole('link')).toHaveAttribute('href', '');
  });

  it('applies custom target value', () => {
    const { getByRole } = render(<Link target="_blank">Link</Link>);
    expect(getByRole('link')).toHaveAttribute('target', '_blank');
  });
});
