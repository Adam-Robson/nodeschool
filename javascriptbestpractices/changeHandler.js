const coins = {
  q: 25,
  d: 10,
  n: 5,
  p: 1
}

module.exports = {
  getAmount: coinType => {
    if (!coins[coinType]) throw new Error(`Coin not recognized ${coinType}`)
    return coins[coinType]
  },
  convertToChange: balance => {
    let change = []

    for (let i in coins) {
      let val = coins[i]

      while (val <= balance) {
        balance -= val
        change.push(i)
      }
    }
    return change
  }
}
