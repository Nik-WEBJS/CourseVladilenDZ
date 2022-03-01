const groceries = {
   "Orange Juice": {
      price: 1.5,
      discount: 10,
   },
   "Chocolate": {
      price: 2,
      discount: 0,
   },
   // more items...     totalPrice 0.050000000000000266
}

function getTotalPriceOfShoppingBag(shoppingBag) {
   let sum = 0
   for (const item of shoppingBag) {
      const {product, quantity} = item
      const {price, discount} = groceries[product]
      sum += (price - (price / 100 * discount)) * quantity
   }
   return sum
}

const shoppingBag = [
   { product: 'Chocolate', quantity: 3 },
   { product: 'Orange Juice', quantity: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05



