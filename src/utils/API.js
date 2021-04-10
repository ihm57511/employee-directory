import axios from 'axios';

const url = 'https://randomuser.me/api/?results=35&nat=us';

export default {
  search: function(query) {
    return axios.get(url);
  }
};
