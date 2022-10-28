'use strict'

const client = require('../request')

const apiPermissions = async() => {
  try {
    const response = client.apiPermissions({ recvWindow: 5000 })
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = apiPermissions
