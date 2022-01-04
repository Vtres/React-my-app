import React, { Component,useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';
import Button from '@material-ui/core/Button';

export default function Editorr() {
  const [editorState, setEditor] = useState(EditorState.createEmpty())
  const [data, setData] = useState('')
  const onEditorStateChange = (editorState) => {
    setEditor(editorState);
    // event.target.value
  };
  const toSave = () =>{
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setData(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    document.getElementById("conteudo").innerHTML = data;
  }
  return (
      <div className='editor'>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          className='style-menu-editor'
          onEditorStateChange={onEditorStateChange}
        />
        <Button variant="contained" color="primary" onClick={toSave}>Finalizar</Button>
        {data ? (
          <div id='conteudo'>
          </div>
        ): null}
      </div>     

  )
}

// export default class Editorr extends Component {
//   state = {
//     editorState:,
//   }

  
//   toSave = (event) => {
//     console.log(this.editorState)
//   }

//   render() {
//     const { editorState } = this.state;
//     const {text} = this.state;
//     // text=draftToHtml(convertToRaw(this.editorState.getCurrentContent()))  
//     return (
//       <div className='editor'>
//         <Editor
//           editorState={editorState}
//           toolbarClassName="toolbarClassName"
//           wrapperClassName="wrapperClassName"
//           editorClassName="editorClassName"
//           className='style-menu-editor'
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <Button variant="contained" color="primary" onClick={this.toSave}>Finalizar</Button>
//       </div>
//     );
//   }
// }

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