import { readImage } from 'draft-js-image-plugin/utils/file';

let becomeFailed = false;

export default function mockUpload(data, success, failed, progress) {
  function doProgress(percent) {
    progress(percent || 1);
    if (percent === 100) {
      // Start reading the file
      data.files.forEach((file) => {
        readImage(file)
          .then((placholder) => placholder.src)
          .then((src) => {
            if (becomeFailed) {
              alert('upload error on purpose!');
              failed([{ file }]);
            } else {
              alert('upload finished');
              success([{ file, src }]);
            }
            becomeFailed = !becomeFailed;
          });
      });
    } else {
      setTimeout(doProgress, 250, (percent || 0) + 10);
    }
  }

  doProgress();
}
