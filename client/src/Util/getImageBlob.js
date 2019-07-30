export default function getImageBlob(imageURI) {
  return fetch(`/api/images/download/${imageURI}`).then((imageBuffer) => {
    return imageBuffer.blob();
  });
}