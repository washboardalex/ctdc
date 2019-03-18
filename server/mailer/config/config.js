const source = require('./source.json');

const user = source.user; 
const refreshToken = source.refresh_token;
const accessToken = source.access_token;


module.exports = {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
}