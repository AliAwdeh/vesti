const express = require('express');
const router = express.Router();
const { OrderItem } = require('../models/index');

// Create a new order item
router.post('/', async (req, res) => {
  try {
    const orderItem = await OrderItem.create(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all order items
router.get('/', async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get an order item by ID
router.get('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      res.json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an order item by ID
router.put('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      await orderItem.update(req.body);
      res.json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an order item by ID
router.delete('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (orderItem) {
      await orderItem.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
