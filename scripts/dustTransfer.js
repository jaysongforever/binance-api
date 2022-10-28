'use strict'

const client = require('../request')

const dustTransfer = async() => {
  try {
    const response = await client.dustTransfer(['ETH', 'XRP'])
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = dustTransfer
  
