#!/bin/bash

# Script to npm link all the plugins
# Afterwards, run the following in your local repo: "npm link draft-js-alignment-plugin draft-js-cleanup-empty-plugin draft-js-counter-plugin draft-js-dnd-plugin draft-js-emoji-plugin draft-js-entity-props-plugin draft-js-focus-plugin draft-js-hashtag-plugin draft-js-image-plugin draft-js-linkify-plugin draft-js-mention-plugin draft-js-plugins draft-js-plugins-editor draft-js-resizeable-plugin draft-js-sticker-plugin draft-js-table-plugin draft-js-toolbar-plugin draft-js-undo-plugin"


cd $(git rev-parse --show-cdup)
npm link
for f in draft-js-* 
do
    cd $f && npm link && cd ..
done
