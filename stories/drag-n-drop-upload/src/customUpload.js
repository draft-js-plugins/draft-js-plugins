import { readFiles } from '../../../packages/drag-n-drop-upload/src/utils/file';

/*
*
* @name: customUpload
* @desc: Custom file upload function.
* @param {[File], formData} data: consists of an array of files that have been uploaded and a formData object composed of those same files.
* @param {function([{name: string, src: string}])} success - function to mark a successfull file upload, it takes an array of successfully uploaded files.
* @param {function({name: string, src?: string})} failed - function that is called to mark a failure to upload one or more files. Removes the upload placeholders.
* @param {(function(percent:int, file: {name:string, src:string})} progress - function to mark the progress in percentage points. It updates the progress count on each placeholder.
*/
export const customUpload = (data, success, failed, progress) => {

 let intervalId = -1;
 let currentProgress = 0;

 intervalId = setInterval(() => {
   if (currentProgress < 100) {
      currentProgress += 10;
      data.files.forEach((imageFile) => {
        progress(currentProgress, imageFile);
      });
    }

    if (currentProgress === 100) {
      clearInterval(intervalId);

      readFiles(data.files).then((filesRead) => {
        const mockResult = filesRead.map(f => ({ name: f.name, src: f.src }));
        success(mockResult/*, { retainSrc: true }*/);
      });
    }

 }, 1000);

};
