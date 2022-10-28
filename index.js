'use strict'
const random = require('random')
const {
  accountSnapshot,
  accountStatus,
  apiPermissions,
  assetDetail,
  assetDevidendRecord,
  bnbConvertibleAssets,
  coinInfo,
  depositAddress,
  depositHistory,
  disableFastWithdraw,
  dustLog,
  dustTransfer,
  enableFastWithdraw,
  fundingWallet,
  systemStatus,
  tradeFee,
  tradingStatus,
  userAsset,
  userUniversalTransfer,
  userUniversalTransferHistory,
  withdraw,
  withdrawHistory
} = require('./scripts')

coinInfo('ETH')