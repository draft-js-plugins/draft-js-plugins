import { DraftHandleValue, EditorState, SelectionState } from 'draft-js';
import { PluginFunctions } from '@draft-js-plugins/editor';
import { DndUploadPluginConfig } from '.';
import modifyBlockData from './modifiers/modifyBlockData';
import removeBlock from './modifiers/removeBlock';
import { readFiles } from './utils/file';
import { insertPlaceholder } from  './components/insertPlaceholder';

let placeholderBlocksList = [];

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
        let _editorState = getEditorState();
        placeholderBlocksList = [];
        placeholders.forEach((placeholder) => {
          const customBlockProps = insertPlaceholder(_editorState, placeholder.name);
          const { state, key, text, blockKey } = customBlockProps;
          placeholderBlocksList.push({key, text, blockKey});
          _editorState = state;
        });
        setEditorState(_editorState);

        handleUpload(data,
          // TODO: what does retainSrc do?
          (uploadedFiles /*, {  retainSrc }*/) => {
            /* Success! */

           // TODO: this removes all placeholders and inserts all images,
           // but probably not in the same place. Fix this.
           let editorState = getEditorState();
           placeholderBlocksList.forEach(element => {
             editorState = removeBlock(editorState, element.blockKey);
           });
           setEditorState(editorState);

           if(uploadedFiles) {
             uploadedFiles.forEach((file) => {
               if (config.addImage) {
                 editorState = config.addImage(editorState, file.src);
               }
             });
             setEditorState(editorState);
           }

         } , (file) => {
           /* On fail */

           // Failed to upload a given file.
           // Remove placeholder for the file.
           // Any other special handling of this use case should be done manually by the user.
           let editorState = getEditorState();
           const blockInList  = placeholderBlocksList.find(p => p.text === file.name);
           editorState = removeBlock(editorState, blockInList.blockKey);
           setEditorState(editorState);

         }, (percent, file) => {
          /* On progress */
          let newEditorState = getEditorState();
          const blockKey = placeholderBlocksList.find(p => p.text === file);
          if(blockKey !== undefined) {
            const blockData = { name: file, progress: `${percent}%`};
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
