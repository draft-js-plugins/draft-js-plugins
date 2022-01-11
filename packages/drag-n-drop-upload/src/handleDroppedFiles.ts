import { DraftHandleValue, EditorState, SelectionState, AtomicBlockUtils } from 'draft-js';
import { PluginFunctions } from '@draft-js-plugins/editor';
import { DndUploadPluginConfig } from '.';
import modifyBlockData from './modifiers/modifyBlockData';
import removeBlock from './modifiers/removeBlock';
import { readFiles } from './utils/file';
import { insertPlaceholder } from  './components/insertPlaceholder';
import UploadPlaceholder from './components/UploadPlaceholder';

let placeholderBlocksList = [];

/*
const onProgress = (percent, file) => {
  newEditorState = getEditorState();
  placeholders.forEach((placeholder) => {
    const blocks = getBlocksWhereEntityData(newEditorState, (p) => p.src === placeholder.src && p.progress !== undefined);
    if (blocks.size) {
      newEditorState = modifyBlockData(newEditorState, blocks.first().get('key'), { progress: percent });
    }
  });
  setEditorState(newEditorState);
}*/

const onFailure = (file) => console.log(fail);
//const onSuccess =

   /*
   // Success, remove 'progress' and 'src'
   let newEditorState = getEditorState();
   uploadedFiles.forEach((file) => {
     const blocks = getBlocksWhereEntityData(editorState, (block) => block.src === file.src && block.progress !== undefined);
     if (blocks.size) {
       // Blocks have progress or placeholders.
       const newEditorStateOrBlockType = handleBlock
         ? handleBlock(newEditorState, newEditorState.getSelection(), file)
         : defaultBlockType;

       newEditorState = replaceBlock(
         modifyBlockData(
           newEditorState,
           blocks.first().get('key'),
           retainSrc ? { progress: undefined } : { progress: undefined, src: undefined }
         ),
         blocks.first().get('key'),
         newEditorStateOrBlockType
       );
     } else {
       const newEditorStateOrBlockType = handleBlock
         ? handleBlock(newEditorState, newEditorState.getSelection(), file)
         : defaultHandleBlock(newEditorState, newEditorState.getSelection(), file, defaultBlockType);

       if (!newEditorStateOrBlockType) {
      newEditorState = defaultHandleBlock(newEditorState, selection, file, defaultBlockType);
    } else if (typeof newEditorStateOrBlockType === 'string') {
      newEditorState = defaultHandleBlock(newEditorState, selection, file, newEditorStateOrBlockType);
    } else {
      newEditorState = newEditorStateOrBlockType;
    }
  }
});

};

//import { getBlocksWhereEntityData } from './utils/block';

/*
function defaultHandleBlock(state, selection, data, defaultBlockType):Any {
  return addBlock(state, selection, defaultBlockType, data);
}*/

// Todo: without these variables the code below stops working.
// What should they be set to?
//const handleBlock = undefined;
//const defaultBlockType = '';

export default function onDropFile(config: DndUploadPluginConfig) {
  return function onDropFileInner(
    selection: SelectionState,
    files: Blob[],
    { getEditorState, setEditorState }: PluginFunctions
  ): DraftHandleValue {
    // TODO need to make sure the correct image block is added
    // TODO -> addImage must be passed in. content type matching should happen
    // TODO make sure the Form building also works fine with S3 direct upload

    // Get upload function from config or editor props
    const { handleUpload } = config;

    if (handleUpload) {

      const formData = new FormData();
      const data: { files: File[]; formData: FormData } = { files: [], formData };

      for (const file of files) {
        // eslint-disable-line no-restricted-syntax
        if (file && file instanceof File) {
          data.formData.append('files', file);
          data.files.push(file);
        }
      }

      setEditorState(EditorState.acceptSelection(getEditorState(), selection));

      // Read files on client side
      readFiles(data.files).then((placeholders) => {

        // Add upload placeholders for each image before uploading
        let editorState = getEditorState();
        placeholders.forEach((placeholder) => {
          const customBlockProps = insertPlaceholder(editorState, placeholder.name);
          const { state, key, text} = customBlockProps;
          placeholderBlocksList.push({key: key, text: text});
          editorState = state;
        });
        setEditorState(editorState);

        //
        handleUpload(data, (uploadedFiles, {  retainSrc }) => {
            /* Success */
           const blockInList  = placeholderBlocksList.find(p => p.text === uploadedFiles[0].name)[0];
           let editorState = getEditorState();

           /*
           // TODO: this inserts the files on the editor
           if(uploadedFiles) {

             uploadedFiles.forEach((file) => {
               if (config.addImage) {
                 editorState = config.addImage(editorState, file.src);
               }
             });
             setEditorState(editorState);
           }*/
         } , onFailure, (percent, file) => {
          /* On progress */
          let newEditorState = getEditorState();
          let blockKey = placeholderBlocksList.find(p => p.text === file);
          if(blockKey !== undefined) {
            const blockData = { name: file, progress: percent + '%' };
            newEditorState = modifyBlockData(newEditorState, blockKey.key, blockData);
            setEditorState(newEditorState);
          }
        });

      });

      return 'handled';
   }

    return 'not-handled';
  }
}
