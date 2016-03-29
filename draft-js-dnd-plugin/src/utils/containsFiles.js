export default function (event) {
  if (event.dataTransfer.types) {
    for (let i = 0; i < event.dataTransfer.types.length; i++) {
      if (event.dataTransfer.types[i] === 'Files') {
        return true;
      }
    }
  }

  return false;
}
