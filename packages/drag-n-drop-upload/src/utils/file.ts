export interface FileResult {
  lastModifiedDate: string | undefined;
  lastModified: number;
  name: string;
  size: number;
  type: string;
  src: string | ArrayBuffer | null;
}

// Read file contents intelligently as plain text/json, image as dataUrl or
// anything else as binary
export function readFile(file: File): Promise<FileResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    // This is called when finished reading
    reader.onload = (event) => {
      // Return an array with one image
      resolve({
        // These are attributes like size, name, type, ...
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        lastModifiedDate: file.lastModifiedDate,
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,

        // This is the files content as base64
        src: event.target!.result,
      });
    };

    if (file.type.indexOf('text/') === 0 || file.type === 'application/json') {
      reader.readAsText(file);
    } else if (file.type.indexOf('image/') === 0) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsBinaryString(file);
    }
  });
}

// Read multiple files using above function
export function readFiles(files: File[]): Promise<FileResult[]> {
  return Promise.all(files.map(readFile));
}
