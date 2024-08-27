const sequelize = require('../connection/connection');
const User = require('./User');
const Store = require('./Store');
const Product = require('./Product');
const Order = require('./Order');
const OrderItem = require('./Order_Items');
const Notification = require('./Notifications');
const Discount = require('./Discounts');
const StoreCategory = require('./Store_Categories');




User.hasMany(Store, { foreignKey: 'owner_id' });
Store.belongsTo(User, { foreignKey: 'owner_id' });

Store.hasMany(Product, { foreignKey: 'store_id' });
Product.belongsTo(Store, { foreignKey: 'store_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Store.hasMany(Order, { foreignKey: 'store_id' });
Order.belongsTo(Store, { foreignKey: 'store_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

Store.hasMany(Notification, { foreignKey: 'store_id' });
Notification.belongsTo(Store, { foreignKey: 'store_id' });

Store.hasMany(Discount, { foreignKey: 'store_id' });
Discount.belongsTo(Store, { foreignKey: 'store_id' });

Product.hasMany(Discount, { foreignKey: 'product_id' });
Discount.belongsTo(Product, { foreignKey: 'product_id' });

Store.hasMany(StoreCategory, { foreignKey: 'store_id' });
StoreCategory.belongsTo(Store, { foreignKey: 'store_id' });

module.exports = {
  User,
  Store,
  Product,
  Order,
  OrderItem,
  Notification,
  Discount,
  StoreCategory,
  sequelize
};
