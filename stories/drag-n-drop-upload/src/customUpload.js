const FILE_SRC = '/images/canada-landscape-small.jpg';

/*
*
* @name: handleUpload
* @desc: Custom file upload function.
* @param {param type} data - (){})
* @param {param type} success - successful upload
* @param {param type} failed - failed to upload files.
* @param {param type} progress - handle progress.
*/
export const customUpload = (data, success, failed, progress):void => {

 const mockResult = data.files.map(f => ({ name: f.name, src: FILE_SRC }));

 let intervalId = -1;
 let currentProgress = 0;

 intervalId = setInterval(() => {
   if (currentProgress < 100) {
      currentProgress += 10;
      progress(currentProgress, mockResult[0].name);
    }

    if (currentProgress === 100) {
      clearInterval(intervalId);
      success(mockResult/*, { retainSrc: true }*/);
    }

 }, 1000);

};
