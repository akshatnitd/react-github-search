import axios from 'axios';

function getRepoInfo (text) {
  return axios.get('https://api.github.com/search/repositories?q=' + text);
}


var helpers = {
  getRepos: function (keyword) {
    return getRepoInfo(keyword)
      .then(function (info) {
        return info;
      })
    .catch(function (err) {
      console.warn('Error in getPlayersInfo: ', err);
    });
  }
};

export default helpers;