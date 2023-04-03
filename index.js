const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

// Configuración de Morgan y Compression
app.use(morgan('dev'));
app.use(compression());

// Rutas de la aplicación
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar servidor HTTP
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

/*var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'YOUR_ACCESS_TOKEN'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)*/