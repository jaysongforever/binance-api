'use strict'

const client = require('../request')

const systemStatus = async() => {
  try {
    const response = await client.systemStatus()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = systemStatus
  