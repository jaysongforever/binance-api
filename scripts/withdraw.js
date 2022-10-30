'use strict'

const random = require('random')
const client = require('../request')
const address = require('../address.json')

const sleep = (time) => {
  let startTime = new Date().getTime() + parseInt(time, 10)
  while(new Date().getTime() < startTime) {}
}

const withdraw = () => {
  let timeInterval = 0
  let times = []
  for(let i = 0; i < address.length; i++) {
    const randomTime = i === 0 ? 0 : random.int(8 * 60, 20 * 60)
    times.push(randomTime)
    timeInterval = timeInterval + randomTime

    setTimeout(async() => {
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
        console.log('Now time:', new Date(), 'Next minutes:',i < times.length - 1 ? (times[i+1] / 60).toFixed(2) : '0', 'Number:', i + 1)
        // sleep(timeInterval * 1000)
      } catch (error) {
        client.logger.error(error)
      }
    }, timeInterval * 1000)
  }
}

module.exports = withdraw