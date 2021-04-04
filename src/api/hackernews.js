const { base_url } = require("./network");

const getNewStories = () => {
  return fetch(`${base_url}/newstories.json`);
};

const getStoriesData = (id) => {
  return fetch(`${base_url}/item/${id}.json`);
};

export default {
  getNewStories,
  getStoriesData,
};
