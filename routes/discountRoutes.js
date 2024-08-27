const express = require('express');
const router = express.Router();
const { Discount } = require('../models/index');

// Create a new discount
router.post('/', async (req, res) => {
  try {
    const discount = await Discount.create(req.body);
    res.status(201).json(discount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all discounts
router.get('/', async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.json(discounts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a discount by ID
router.get('/:id', async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (discount) {
      res.json(discount);
    } else {
      res.status(404).json({ error: 'Discount not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a discount by ID
router.put('/:id', async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (discount) {
      await discount.update(req.body);
      res.json(discount);
    } else {
      res.status(404).json({ error: 'Discount not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a discount by ID
router.delete('/:id', async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (discount) {
      await discount.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Discount not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
