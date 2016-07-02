import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createInlinePlugin from '../lib/index.js'
import { EditorState } from 'draft-js';

import './styles.css';

const inlinePlugin = createInlinePlugin()
const { BoldButton, ItalicButton, UnderlineButton, MonospaceButton } = inlinePlugin

class InlineEditor extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)

        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <div className={'editor'}>
                <BoldButton />
                <ItalicButton />
                <UnderlineButton />
                <MonospaceButton />
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={[inlinePlugin]}
                    ref="editor"
                />
            </div>
            
        )
    }
}

ReactDOM.render((
    <InlineEditor />
), document.getElementById('target'));
