'use strict'

const client = require('../request')

const userAsset = async() => {
  try {
    const response = await client.userAsset()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = userAsset
