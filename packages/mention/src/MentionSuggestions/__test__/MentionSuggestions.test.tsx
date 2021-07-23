import { render } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';
import {
  MentionSuggestions,
  MentionSuggestionsProps,
} from '../MentionSuggestions';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

const mentions = [
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar:
      'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar:
      'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
];

function defaultProps(): MentionSuggestionsProps {
  return {
    open: false,
    onOpenChange: jest.fn(),
    suggestions: mentions,
    callbacks: {
      keyBindingFn: jest.fn(),
      handleReturn: jest.fn(),
    },
    store: {
      getAllSearches: jest.fn(() => ({ has: () => false })),
      getPortalClientRect: jest.fn(),
      isEscaped: jest.fn(),
      resetEscapedSearch: jest.fn(),
      escapeSearch: jest.fn(),
    },
    ariaProps: {},
    onSearchChange: jest.fn(),
    onAddMention: jest.fn(),
    positionSuggestions: jest.fn(() => ({})),
    theme: {},
  } as unknown as MentionSuggestionsProps;
}

describe('MentionSuggestions Component', () => {
  it('Controls open state', () => {
    const props = defaultProps();
    const instanceRef = React.createRef<MentionSuggestions>();
    render(<MentionSuggestions {...props} ref={instanceRef} />);

    instanceRef.current!.openDropdown();
    expect(props.onOpenChange).lastCalledWith(true);
    instanceRef.current!.closeDropdown();
    expect(props.onOpenChange).lastCalledWith(false);
  });

  it('The popoverComponent prop changes the popover component', () => {
    const PopoverComponent = React.forwardRef<HTMLDivElement>(
      (
        {
          children,
          ...props
        }: {
          children?: ReactNode;
        },
        ref
      ): ReactElement => (
        <div data-test-test {...props} ref={ref}>
          {children}
        </div>
      )
    );
    PopoverComponent.displayName = 'PopoverComponent';

    const props = defaultProps();
    props.open = true;
    props.popoverComponent = <PopoverComponent />;
    const { container } = render(<MentionSuggestions {...props} />);
    expect(container.querySelectorAll('[data-test-test]')).toHaveLength(1);
  });

  it('The popoverComponent recieves the children', () => {
    let called = false;
    const PopoverComponent = React.forwardRef<HTMLDivElement>(
      (
        {
          children,
          ...props
        }: {
          children?: ReactNode;
        },
        ref
      ): ReactElement => {
        called = true;
        expect(React.Children.count(children)).toBe(mentions.length);
        return (
          <div {...props} ref={ref}>
            {children}
          </div>
        );
      }
    );
    PopoverComponent.displayName = 'PopoverComponent';

    const props = defaultProps();
    props.open = true;
    props.popoverComponent = <PopoverComponent />;
    render(<MentionSuggestions {...props} />);
    expect(called).toBeTruthy();
  });

  it('The popoverComponent prop uses div by default', () => {
    const props = defaultProps();
    props.open = true;
    const { container } = render(<MentionSuggestions {...props} data-findme />);
    expect(container.firstChild).toHaveAttribute('data-findme');
  });
});
