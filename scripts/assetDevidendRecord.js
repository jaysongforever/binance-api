'use strict'

const client = require('../request')

const assetDevidendRecord = async() => {
  try {
    const response = await client.assetDevidendRecord()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = assetDevidendRecord