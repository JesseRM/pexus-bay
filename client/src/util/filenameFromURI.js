function getFilenameFromURI(URI) {
  let startIndex = URI.lastIndexOf('/') + 1;
  let endIndex = URI.lastIndexOf('.jpg');
  let filename = '';

  if (endIndex === -1) endIndex = URI.lastIndexOf('.jpeg');
  if (endIndex === -1) endIndex = URI.lastIndexOf('?');

  if (endIndex === -1) {
    filename = URI.slice(startIndex);
  } else {
    filename = URI.slice(startIndex, endIndex);
  }

  return filename;
}

export default getFilenameFromURI;