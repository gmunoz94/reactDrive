const axios = require('axios');
require('dotenv').config();

const requestData = {
  'grant_type': 'client_credentials',
  'client_id': process.env.CONSUMER_KEY,
  'client_secret': process.env.CONSUMER_SECRET,
}

axios.post('https://orgfarm-9ad4826d90-dev-ed.develop.lightning.force.com/services/oauth2/authorize?response_type=token&client_id=SalesforceConnector&redirect_uri=http://localhost:3000', {
    requestData
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});