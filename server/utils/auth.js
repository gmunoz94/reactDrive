const axios = require('axios');
require('dotenv').config();

const requestData = {
  'grant_type': 'client_credentials',
  'client_id': process.env.CONSUMER_KEY,
  'client_secret': process.env.CONSUMER_SECRET,
}

axios.post('https://resilient-goat-4hxsg-dev-ed.trailblaze.lightning.force.com/services/oauth2/authorize?response_type=token&client_id=SalesforceConnector&redirect_uri=your_redirect_uri', {
    requestData
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});