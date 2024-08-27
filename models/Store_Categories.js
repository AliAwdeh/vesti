const { DataTypes } = require('sequelize');
const sequelize = require('../connection/connection'); // Adjust path as needed
const Store = require('./Store');

const StoreCategory = sequelize.define('StoreCategory', {
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
  categoryName: {
    type: DataTypes.STRING,
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
  tableName: 'store_categories',
  timestamps: false
});

module.exports = StoreCategory;
