const { base_url } = require("./network");

const getTopstories = () => {
  return fetch(`${base_url}/topstories.json`);
};

export default {
  getTopstories,
};
