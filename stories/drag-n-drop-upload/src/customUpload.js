const FILE_SRC = '/images/canada-landscape-small.jpg';

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

 const mockResult = data.files.map(f => ({ name: f.name, src: FILE_SRC }));

 let intervalId = -1;
 let currentProgress = 0;

 intervalId = setInterval(() => {
   if (currentProgress < 100) {
      currentProgress += 10;
      progress(currentProgress, mockResult[0]);
    }

    if (currentProgress === 100) {
      clearInterval(intervalId);
      success(mockResult/*, { retainSrc: true }*/);
    }

 }, 1000);

};
