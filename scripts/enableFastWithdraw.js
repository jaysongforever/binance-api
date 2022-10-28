'use strict'

const client = require('../request')

const enableFastWithdraw = async() => {
  try {
    const response = await client.enableFastWithdraw()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = enableFastWithdraw
  
