var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
]

module.exports = {
  getProducts: () => products,
  getProduct: productId => products.find(p => p.id === productId)
}
