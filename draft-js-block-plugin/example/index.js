import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createBlockPlugin from '../lib/index.js'
import { EditorState } from 'draft-js';

import './styles.css';

const blockPlugin = createBlockPlugin()
const { H1Button, H2Button, H3Button, H4Button, H5Button, H6Button, BlockquoteButton, UlButton, OlButton, CodeblockButton } = blockPlugin

class BlockEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <div>
                <H1Button />
                <H2Button />
                <H3Button />
                <H4Button />
                <H5Button />
                <H6Button />
                <BlockquoteButton />
                <UlButton />
                <OlButton />
                <CodeblockButton />
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={[blockPlugin]}
                    ref="editor"
                />
            </div>
            
        )
    }
}

ReactDOM.render((
    <BlockEditor />
), document.getElementById('target'));
