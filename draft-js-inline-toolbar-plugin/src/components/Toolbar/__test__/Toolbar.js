import React, { Component } from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Toolbar from '../index';

describe.skip('Toolbar', () => {
  it('allows children to override the content', done => {
    class Child extends Component {
      componentDidMount() {
        setTimeout(() => {
          this.props.onOverrideContent(() => {
            setTimeout(() => {
              this.props.onOverrideContent(undefined);
            });
            return <span className="overridden" />;
          });
        });
      }
      render() {
        return <span className="initial" />;
      }
    }

    const theme = { toolbarStyles: {} };

    const store = {
      subscribeToItem() {},
      unsubscribeFromItem() {},
      getItem: name =>
        ({
          getEditorState: () => ({
            getSelection: () => ({
              isCollapsed: () => true,
              getHasFocus: () => true,
            }),
          }),
        }[name]),
    };

    const wrapper = mount(
      <Toolbar store={store} theme={theme}>
        {externalProps => <Child {...externalProps} />}
      </Toolbar>
    );

    expect(wrapper.find('.initial').length).to.equal(1);

    setTimeout(() => {
      expect(wrapper.find('.initial').length).to.equal(0);
      expect(wrapper.find('.overridden').length).to.equal(1);

      setTimeout(() => {
        expect(wrapper.find('.initial').length).to.equal(1);
        expect(wrapper.find('.overridden').length).to.equal(0);
        done();
      });
    });
  });
});
