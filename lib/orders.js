module.exports = function (orderDAO) {
  return {
    display: function (id, fn) {
      fn(null, {
        items: [],
        totalPrice: 0,
        actions: [
          {
            action: 'append-beverage',
            target: id,
            parameters: {
              beverageRef: null,
              quantity: 0
            }
          }
        ]
      })
    }
  }
}