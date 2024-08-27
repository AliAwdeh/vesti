const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection'); // Adjust path as needed
const Store = require('./Store');
const Product = require('./Product');

const Discount = sequelize.define('Discount', {
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
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  discountPercentage: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
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
  tableName: 'discounts',
  timestamps: false
});

module.exports = Discount;
