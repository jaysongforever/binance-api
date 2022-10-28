'use strict'

const client = require('../request')

const depositHistory = async() => {
  try {
    const response = await client.depositHistory(
      {
        coin: 'BNB',
        status: 1
      }
    )
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = depositHistory
  
