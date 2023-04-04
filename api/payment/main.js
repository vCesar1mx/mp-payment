function create_payment(mp_manager, res, title, quantity, currency_id, unit_price) {

  var preference = {
    items: [
      {
        title: title,
        quantity: Number(quantity),
        currency_id: currency_id,
        unit_price: Number(unit_price)
      }
    ]
  };

  mp_manager.preferences.create(preference).then(function (data) {
    console.dir(data);
  });

}

function get_payment(mp_manager, res, id) {
  mp_manager.preferences.get(id).then(function (data) {
    console.dir(data)
  })
}

module.exports = {
  create_payment: create_payment,
  get_payment: get_payment
}