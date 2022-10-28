'use strict'

const client = require('../request')

const dustLog = async() => {
  try {
    const response = await client.dustLog()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = dustLog
  