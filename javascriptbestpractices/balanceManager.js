const balance = 0

module.exports = {
  canAfford: amount => {
    if(!this.isValidAmount(amount)) {
      throw new Error('Invalid input')
    }
    return amount <= balance
  },
  decreaseBalance: amount => {
    if (!this.canAfford(amount)) {
      throw new Error('Insufficient balance')
    }
    return balance -= amount;
  },
  isValidAmount: amount => typeof amount === 'number',
  increaseBalance: amount => balance += amount,
  getBalance: () => balance,
}
