var mp_manager = require('mercadopago');
mp_manager.configure({
    access_token: 'YOUR_ACCESS_TOKEN'
});
// Libraries
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//Process Functions
const mp = require('./api/payment/main.js');

// Configuración de Morgan y Compression
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));

// Rutas de la aplicación
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.post('/api/payment/:process', (req, res) => {
    var process = req.params.process;
    switch (process) {
        case 'create':
            console.log(req.body);
            if (req.body.length !== 4) {
                {
                    return res.jsonp({
                        message: "Error: You need at least 4 parameters",
                        data_received: {
                            title: req.body.title,
                            quantity: req.body.quantity,
                            currency_id: req.body.currency_id,
                            unit_price: req.body.unit_price
                        }, data_expected: {
                            title: 'Product Name',
                            quantity: '50',
                            currency_id: 'MXN',
                            unit_price: '150'
                        }
                    })
                }
            }
            var title = req.body.title;
            var quantity = req.body.quantity;
            var currency_id = req.body.currency_id;
            var unit_price = req.body.unit_price;
            mp.create_payment(mp_manager, req, title, quantity, currency_id, unit_price);
            break;
        case 'retrieve':

            break;
        case 'capture':

            break;
        default:
            break;
    }
});

// Iniciar servidor HTTP
const PORT = 25997;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
