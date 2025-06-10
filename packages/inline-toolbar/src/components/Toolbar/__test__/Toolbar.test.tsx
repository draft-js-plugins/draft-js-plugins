import { createStore } from '@draft-js-plugins/utils';
import { EditorState } from 'draft-js';
import React, { ReactElement, useEffect } from 'react';
import { render } from '@testing-library/react';
import { StoreItemMap } from '../../../';
import Toolbar, { ToolbarChildrenProps } from '../index';

jest.useFakeTimers();

function Child({ onOverrideContent }: ToolbarChildrenProps): ReactElement {
  useEffect(() => {
    setTimeout(() => {
      onOverrideContent(() => {
        setTimeout(() => {
          onOverrideContent(undefined);
        });
        return <span className="overridden" />;
      });
    }, 0);
  }, []);
  return <span className="initial" />;
}

describe('Toolbar', () => {
  test('allows children to override the content', () => {
    const theme = { toolbarStyles: {}, buttonStyles: {} };

    const store = createStore<StoreItemMap>({
      isVisible: false,
      getEditorState: () =>
        ({
          getSelection: () => ({
            isCollapsed: () => true,
            getHasFocus: () => true,
          }),
        }) as EditorState,
    });

    const { container } = render(
      <Toolbar store={store} theme={theme}>
        {(externalProps: ToolbarChildrenProps) => <Child {...externalProps} />}
      </Toolbar>
    );
    expect(container.querySelectorAll('.initial')).toHaveLength(1);
    //activate override
    jest.runOnlyPendingTimers();
    expect(container.querySelectorAll('.initial')).toHaveLength(0);
    expect(container.querySelectorAll('.overridden')).toHaveLength(1);
    //remove override
    jest.runOnlyPendingTimers();
    expect(container.querySelectorAll('.initial')).toHaveLength(1);
    expect(container.querySelectorAll('.overridden')).toHaveLength(0);
  });
});
