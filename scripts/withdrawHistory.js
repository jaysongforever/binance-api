'use strict'

const client = require('../request')

const withdrawHistory = async() => {
  try {
    const response = await client.withdrawHistory(
      {
        coin: 'BNB',
        status: 6
      }
    )
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = withdrawHistory
