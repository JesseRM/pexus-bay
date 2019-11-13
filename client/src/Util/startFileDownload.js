function startFileDownload(anchorEl) {
  document.body.appendChild(anchorEl);
  anchorEl.click();

  URL.revokeObjectURL(anchorEl.href);
  document.body.removeChild(anchorEl);
}

export default startFileDownload;