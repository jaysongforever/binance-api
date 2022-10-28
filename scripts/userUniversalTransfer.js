'use strict'

const client = require('../request')

const userUniversalTransfer = async() => {
  try {
    const response = await client.userUniversalTransfer('MAIN_MARGIN', 'BNB', 0.1)
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = userUniversalTransfer
