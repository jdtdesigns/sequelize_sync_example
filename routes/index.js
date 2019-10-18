const router = require('express').Router();
const { Shop, Coffee } = require('../models');

router.get('/', (req, res) => {
  Shop.findAll({
    include: Coffee // Get all associated coffees for each shop
  })
    .then(shops => {
      // Object.Coffees
      res.render('index', { shops });
    });
});

router.post('/shops', (req, res) => {
  Shop.findOne({
    where: {
      name: req.body.name
    }
  }).then(shop => {
    if (shop) return res.redirect('/');

    Shop.create({
      name: req.body.name
    }).then(() => res.redirect('/'));
  });
});

router.post('/coffees', (req, res) => {
  const id = req.query.shop_id;

  Shop.findOne({
    where: { id },
    include: Coffee
  }).then(shop => {
    const has_coffee = shop.Coffees.find(obj => obj.name === req.body.name);

    if (has_coffee) return res.redirect('/');

    shop.createCoffee({
      name: req.body.name,
      type: req.body.type
    }).then(coffee => res.redirect('/'));
  });
})

module.exports = router;