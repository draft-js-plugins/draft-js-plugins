// Read image as dataUrl
export function readImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    // This is called when finished reading
    reader.onload = (event) => {
      // Return an array with one image
      resolve({
        // These are attributes like size, name, type, ...
        lastModifiedDate: file.lastModifiedDate,
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,

        // This is the files content as base64
        src: event.target.result,
      });
    };

    if (file.type.indexOf('image/') === 0) {
      reader.readAsDataURL(file);
    } else {
      resolve(null);
    }
  });
}

// Read multiple files using above function
export function readImages(files) {
  return Promise.all(files.map(readImage)).then((images) => images.filter((image) => !!image));
}
