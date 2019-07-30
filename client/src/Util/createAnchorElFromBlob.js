export default function createAnchorElFromBlob(imageBlob, imageName) {
  const anchorEl = document.createElement('a');

  anchorEl.href = URL.createObjectURL(imageBlob);
  anchorEl.download = imageName;

  return anchorEl;
}