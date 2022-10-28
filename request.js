const { Spot } = require('@binance/connector')
const HttpsProxyAgent = require('https-proxy-agent')
const httpsAgent = new HttpsProxyAgent('http://127.0.0.1:7890')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret, {
  httpsAgent,
  proxy: false
})

// Get account information
// client.account().then(response => client.logger.log(response.data))
module.exports = client
