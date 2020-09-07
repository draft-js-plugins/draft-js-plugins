import React, { useEffect, useRef } from 'react';

const MentionSuggestionsPortal = props => {
  const searchPortal = useRef();

  // Note: this is a workaround for an obscure issue: https://github.com/draft-js-plugins/draft-js-plugins/pull/667/files
  // Ideally we can remove this in the future.
  const searchPortalRef = element => {
    searchPortal.current = element;
  };

  const updatePortalClientRect = currentProps => {
    currentProps.store.updatePortalClientRect(currentProps.offsetKey, () =>
      searchPortal.current.getBoundingClientRect()
    );
  };

  // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used UNSAFE_componentWillMount. By using componentDidMount
  // instead of UNSAFE_componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // UNSAFE_componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.
  useEffect(() => {
    props.store.register(props.offsetKey);
    props.store.setIsOpened(true);
    updatePortalClientRect(props);

    // trigger a re-render so the MentionSuggestions becomes active
    props.setEditorState(props.getEditorState());

    return () => {
      props.store.unregister(props.offsetKey);
      props.store.setIsOpened(false);
    };
  }, []);

  useEffect(() => {
    updatePortalClientRect(props);
  });

  return <span ref={searchPortalRef}>{props.children}</span>;
};

export default MentionSuggestionsPortal;
