const express = require('express');
const app = express();
const port = 5000;

app.get('/customer/info/:id', async (req, res) => {
    const orderId = req.params.id;    
    res.json({
        name: "Jennie",
        shippingAddress: "123 Main St, Springfield, USA",
        country: "USA",
        phone: 1234567890,
        email: "jennie@demo.com",
        paymentMode: "Cash On Delivery",
        orderId: orderId
    });

});

app.listen(port, () => {
    console.log(`CustomerService running at ${port}`);
});