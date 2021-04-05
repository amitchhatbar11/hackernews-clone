export const pagination = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const getDomainUrl = (url) => {
  let location = document.createElement("a");
  location.href = url;
  return location.hostname;
};

export const getKeyValue = (e) => {
  return { [e.target.name]: e.target.value };
};
