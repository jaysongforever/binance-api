'use strict'

const client = require('../request')

const coinInfo = async(coin) => {
  try {
    const response = await client.coinInfo()
    const res = response.data.find(item => {
      return item.coin === coin
    })
    console.log('🚀 ~ file: coinInfo.js ~ line 9 ~ coinInfo ~ res', res)
    // client.logger.log(response.data)
  } catch (error) {
    client.logger.error(error)
  }
}

module.exports = coinInfo
