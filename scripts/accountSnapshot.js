'use strict'

const client = require('../request')

const accountSnapshot = async() => {
  try {
    const response = await client.accountSnapshot('SPOT')
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = accountSnapshot