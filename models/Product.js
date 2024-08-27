const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection'); 
const Store = require('./Store');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  storeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Store,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: 'shoes'
  },
  imageUrl: {
    type: DataTypes.TEXT
  },
  discount: {
    type: DataTypes.DECIMAL(5, 2)
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = Product;
