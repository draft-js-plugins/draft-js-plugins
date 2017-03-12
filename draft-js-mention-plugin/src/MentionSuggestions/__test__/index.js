import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { fromJS } from 'immutable';

import MentionSuggestions from '../index';

const mentions = fromJS([
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
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
    avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
]);

describe('MentionSuggestions Component', () => {
  it('Closes when suggestions is empty', () => {
    const callbacks = {
      onDownArrow: sinon.spy(),
      onUpArrow: sinon.spy(),
      onTab: sinon.spy(),
      onEscape: sinon.spy(),
      handleReturn: sinon.spy()
    };
    const store = {
      getAllSearches: sinon.spy(() => ({ has: () => false })),
      getPortalClientRect: sinon.spy(),
      isEscaped: sinon.spy(),
      resetEscapedSearch: sinon.spy(),
      escapeSearch: sinon.spy(),
    };
    const ariaProps = {};
    const onSearchChange = sinon.spy();
    const onAddMention = sinon.spy();
    const positionSuggestions = sinon.stub().returns({});
    const suggestions = mount(
      <MentionSuggestions
        ariaProps={ariaProps}
        onSearchChange={onSearchChange}
        positionSuggestions={positionSuggestions}
        suggestions={mentions}
        callbacks={callbacks}
        store={store}
        theme={{}}
        onAddMention={onAddMention}
      />
    );

    suggestions.instance().openDropdown();
    expect(suggestions.state().isActive).to.equal(true);

    suggestions.setProps({
      suggestions: fromJS([]),
    });
    expect(suggestions.state().isActive).to.equal(false);
  });
});
