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
        this.focus = () => this.refs.editor.focus();
    }

    getEditorState = () => this.state.editorState

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <div>
                <H1Button editor={this}/>
                <H2Button editor={this}/>
                <H3Button editor={this}/>
                <H4Button editor={this}/>
                <H5Button editor={this}/>
                <H6Button editor={this}/>
                <BlockquoteButton editor={this}/>
                <UlButton editor={this}/>
                <OlButton editor={this}/>
                <CodeblockButton editor={this}/>
                <div className="editor">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={[blockPlugin]}
                        ref="editor"
                    />
                </div>
            </div>
            
        )
    }
}

ReactDOM.render((
    <BlockEditor />
), document.getElementById('target'));
