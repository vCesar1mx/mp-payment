function create_payment(mp_manager, res, title, quantity, currency_id, unit_price) {

  var preference = {
    items: [
      {
        title: title,
        quantity: Number(quantity),
        currency_id: currency_id,
        unit_price: Number(unit_price)
      }
    ],
    /*payer: {
      phone: {},
      identification: {},
      address: {}
    },*/
    notification_url: `${config.url.webhook_notification}/api/payment/webhook_notification`,
    back_urls: {
      success: config.url.success_back,
      pending: config.url.cancel_back,
      failure: config.url.failure_back
    }
  };

  mp_manager.preferences.create(preference).then(function (data) {
    console.dir(data);
    res.jsonp(data);
  });

}

function get_payment(mp_manager, res, id) {
  mp_manager.preferences.get(id).then(function (data) {
    console.dir(data);
    res.jsonp(data);
  })
}

module.exports = {
  create_payment: create_payment,
  get_payment: get_payment
}