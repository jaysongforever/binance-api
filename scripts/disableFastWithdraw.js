'use strict'

const client = require('../request')

const disableFastWithdraw = async() => {
  try {
    const response = await client.disableFastWithdraw()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = disableFastWithdraw
  