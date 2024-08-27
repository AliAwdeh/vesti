const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const sequelize = require('../connection/connection');

// Create a new user
router.post("/", async (req, res) => {
  const { name, email, password, phoneNumber, location } = req.body;

  // Check if location is provided
  if (location && Array.isArray(location) && location.length === 2) {
    const [longitude, latitude] = location.map((coord) => parseFloat(coord));

    // Create a POINT geometry using ST_SetSRID and ST_MakePoint
    const point = `ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`;

    try {
      const user = await User.create({
        name,
        email,
        password,
        phoneNumber,
        location: sequelize.literal(point), // Use sequelize.literal to handle raw SQL expressions
      });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    }
  } else {
    res.status(400).send("Invalid location format");
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
