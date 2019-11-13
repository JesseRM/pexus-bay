function createAnchorElFromBlob(fileBlob, attributes) {
  const anchorEl = document.createElement('a');

  anchorEl.href = URL.createObjectURL(fileBlob);
  anchorEl.download = attributes.filename + attributes.extension;

  return anchorEl;
}

export default createAnchorElFromBlob;