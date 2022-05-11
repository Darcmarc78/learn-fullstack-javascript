const axios = require('axios');

import config from "./config";

axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(console.error);