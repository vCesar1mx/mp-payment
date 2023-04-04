function create_payment(mp_manager, req, title, quantity, currency_id, unit_price){

    var preference = {
        items: [
          {
            title: title,
            quantity: parseInt(quantity),
            currency_id: currency_id,
            unit_price: parseInt(unit_price)
          }
        ]
      };
      
      var obj_pay = mp_manager.preferences.create(preference);
      console.log(obj_pay);
}

module.exports = {
    create_payment: create_payment
}