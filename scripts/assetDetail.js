'use strict'

const client = require('../request')

const assetDetail = async() => {
  try {
    const response = await client.assetDetail({ asset: 'BNB' })
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = assetDetail