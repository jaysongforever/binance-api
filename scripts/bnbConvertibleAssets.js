'use strict'

const client = require('../request')

const bnbConvertibleAssets = async() => {
  try {
    const response = await client.bnbConvertibleAssets()
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = bnbConvertibleAssets
