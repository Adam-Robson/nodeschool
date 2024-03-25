const balanceManager = require('./balanceManager')
const changeHandler = require('./changeHandler')
const productInventory = require('./productInventory')

module.exports = {
  getProducts: () => productInventory.getProducts(),
  insertCoin: coinType => {
    const value = changeHandler.getAmount(coinType)
    balanceManager.increaseBalance(value)
  },
  releaseChange: () =>{
    const currentBalance = balanceManager.getBalance()
    balanceManager.decreaseBalance(currentBalance)
    return changeHandler.convertToChange(currentBalance)
  },
  vendProduct: productId => {
    const product = productInventory.getProduct(productId)
    balanceManager.decreaseBalance(product.price)
    return product
  }
}
