'use strict'

const client = require('../request')

const fundingWallet = async() => {
  try {
    const response = await client.fundingWallet({ asset: 'BNB' })
    client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = fundingWallet
  
