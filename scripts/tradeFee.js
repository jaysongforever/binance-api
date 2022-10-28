'use strict'

const client = require('../request')

const tradeFee = async() => {
  try {
    const response = await client.tradeFee({ symbol: 'BNBUSDT' })
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = tradeFee
