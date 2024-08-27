const express = require('express');
const router = express.Router();
const { StoreCategory } = require('../models/index');

// Create a new store category
router.post('/', async (req, res) => {
  try {
    const storeCategory = await StoreCategory.create(req.body);
    res.status(201).json(storeCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all store categories
router.get('/', async (req, res) => {
  try {
    const storeCategories = await StoreCategory.findAll();
    res.json(storeCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a store category by ID
router.get('/:id', async (req, res) => {
  try {
    const storeCategory = await StoreCategory.findByPk(req.params.id);
    if (storeCategory) {
      res.json(storeCategory);
    } else {
      res.status(404).json({ error: 'Store category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a store category by ID
router.put('/:id', async (req, res) => {
  try {
    const storeCategory = await StoreCategory.findByPk(req.params.id);
    if (storeCategory) {
      await storeCategory.update(req.body);
      res.json(storeCategory);
    } else {
      res.status(404).json({ error: 'Store category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a store category by ID
router.delete('/:id', async (req, res) => {
  try {
    const storeCategory = await StoreCategory.findByPk(req.params.id);
    if (storeCategory) {
      await storeCategory.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Store category not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
