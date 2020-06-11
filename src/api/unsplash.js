import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID -x7KIlZQv5bfsySYcAlvcQaMv47Jq9jvNEhdtgxFSHQ"
      }
});