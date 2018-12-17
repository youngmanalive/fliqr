export const processImage = (dataURL, callback) => {
  const MAX_WIDTH = 500;
  const MAX_HEIGHT = 500;

  const img = new Image();
  img.src = dataURL;

  img.onload = () => {
    let width = img.width;
    let height = img.height;
  
    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
  
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = width;
    canvas.height = height;
  
    ctx.drawImage(img, 0, 0, width, height);

    const newDataURL = canvas.toDataURL("image/jpeg");
    const thumbBlob = dataURLtoBlob(newDataURL);

    const imgData = {
      originalWidth: img.width,
      originalHeight: img.height,
      thumbWidth: width,
      thumbHeight: height,
      thumbBlob
    };
  
    callback(imgData);
  };
};

const dataURLtoBlob = dataURL => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let len = bstr.length;
  const u8arr = new Uint8Array(len);

  while (len--) u8arr[len] = bstr.charCodeAt(len);

  return new Blob([u8arr], { type: mime });
};

