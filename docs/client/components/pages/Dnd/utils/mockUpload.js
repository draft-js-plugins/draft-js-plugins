

export default function mockUpload(data, success, failed, progress) {
  // Mock file upload, actually only happens client side
  const reader = new FileReader();

  // This is called when finished reading
  reader.onload = e => {
    // Return an array with one image
    const x = {
      // These are attributes like size, name, type, ...
      ...data.files[0],

      // This is the files content as base64
      src: e.target.result,

      // No URL, since nothing on server
      url: null,
    };
    success([x]);
  };

  function doProgress(percent) {
    progress(percent || 1);
    if (percent === 100) {
      // Start reading the file
      reader.readAsDataURL(data.files[0]);
    } else {
      setTimeout(doProgress, 250, (percent || 0) + 10);
    }
  }

  doProgress();
}
