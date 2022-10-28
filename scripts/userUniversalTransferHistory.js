'use strict'

const client = require('../request')

const userUniversalTransferHistory = async() => {
  try {
    const response = await client.userUniversalTransferHistory('MAIN_MARGIN')
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = userUniversalTransferHistory
