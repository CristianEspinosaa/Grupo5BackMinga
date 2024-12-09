import mercadopago from 'mercadopago';

const controller = {
    create: (req, res) => {
        let preference = {
            items: [
                {   
                    title: req.body.title,
                    currency_id: "COP",
                    unit_price: req.body.price,
                    quantity: 1,
                },
            ],
            payer: {
                name: req.user.name,
            },
            back_urls: {
                success: `${process.env.CLIENT_URL}donate/success`,
                failure: `${process.env.CLIENT_URL}donate`,
                pending: `${process.env.CLIENT_URL}donate/success`,
            },
            binary_mode: true,
            auto_return: 'approved',
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => 
                res.status(200).json(response.body.init_point)
            )
            .catch((error) => {
                console.error(error);
                res.status(500).json({ error: 'Error al crear la preferencia' });
            });
    },
};

export default controller;