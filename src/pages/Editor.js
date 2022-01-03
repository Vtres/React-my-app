import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';

export default class Editorr extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return (
      <div className='editor'>
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            className='style-menu-editor'
            onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

// import React, { useState } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export default function Editorr() {
//     const [editorState, setEditorState] = useState('')

//     const onEditorStateChange = (event) => {
//         setEditorState(event.target.value)
//     }
//     state = {
//         editorState: EditorState.createEmpty(),
//     }

//     onEditorStateChange: Function = (editorState) => {
//         this.setState({
//             editorState,
//         });
//     };

//     return (
//         <Editor
//             editorState={editorState}
//             toolbarClassName="toolbarClassName"
//             wrapperClassName="wrapperClassName"
//             editorClassName="editorClassName"
//             onEditorStateChange={this.onEditorStateChange}
//         />
//     );
// }