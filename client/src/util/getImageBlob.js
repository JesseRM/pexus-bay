function getImageBlob(imageURI) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/images/download/${imageURI}`)
    .then((imageBuffer) => {
      if (imageBuffer.status >= 200 && imageBuffer.status <= 299) {
        return imageBuffer.blob();
      } else {
        throw new Error("Error when retrieving image blob.");
      }
    });
}

export default getImageBlob;