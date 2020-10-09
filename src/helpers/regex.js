export const formatMetricsWithCommas = (text) =>
  String(text).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const isNumber = (text) => {
  const reg = /^\d+$/;
  return reg.test(text);
};

export const decodedData = (bytes) => {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  }
  if (bytes < 1048576) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  if (bytes < 1073741824) {
    return `${(bytes / 1048576).toFixed(1)} MB`;
  }
};
