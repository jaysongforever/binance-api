'use strict'

const random = require('random')
const client = require('../request')
const address = require('../address.json')

const withdraw = async() => {
  for(let i = 0; i < address.length; i++) {
    try {
      const response = await client.withdraw(
        'ETH', // coin
        address[i], // withdraw address
        random.float(0.025, 0.03).toFixed(random.int(3, 5)), // amount  // 0.025-0.03的随机长度3-5位
        { // optional parameters
          network: 'BNB',
          name: 'address name',
          walletType: 0
        }
      )
      client.logger.log(response.data)
    } catch (error) {
      client.logger.error(error)
    }
  }
}

module.exports = withdraw