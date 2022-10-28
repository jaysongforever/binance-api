'use strict'

const client = require('../request')

const accountStatus = async() => {
  try {
    const response = await client.accountStatus()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = accountStatus