'use strict'

const random = require('random')
const client = require('../request')
const address = require('../address.json')

const sleep = (time) => {
  let startTime = new Date().getTime() + parseInt(time, 10)
  while(new Date().getTime() < startTime) {}
}

const withdraw = async() => {
  for(let i = 0; i < address.length; i++) {
    try {
      const response = await client.withdraw(
        'ETH', // coin
        address[i], // withdraw address
        random.float(0.025, 0.03).toFixed(random.int(3, 5)), // amount  // 0.025-0.03的随机长度3-5位
        { // optional parameters
          network: 'ETH',
          // name: 'address name',
          // walletType: 0
        }
      )
      client.logger.log(response.data)
      const timeInterval = random.int(8 * 60, 20 * 60)
      console.log('Now time:', new Date(), 'TimeInterval:', (timeInterval / 60).toFixed(2), 'Index:', i+1)
      sleep(timeInterval * 1000)
    } catch (error) {
      client.logger.error(error)
    }
  }
}

module.exports = withdraw