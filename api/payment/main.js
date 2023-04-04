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
      
      mp_manager.preferences.create(preference);
}

module.exports = {
    create_payment: create_payment
}