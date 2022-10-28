'use strict'

const client = require('../request')

const tradingStatus = async() => {
  try {
    const response = await client.tradingStatus()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = tradingStatus