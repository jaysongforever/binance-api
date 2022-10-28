'use strict'

const client = require('../request')

const depositAddress = async() => {
  try {
    const response = await client.depositAddress('BNB')
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = depositAddress
  