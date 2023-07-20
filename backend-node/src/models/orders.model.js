const { Schema, model } = require('mongoose');

const OrdersSchema = new Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    product: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrdersModel = model('orders', OrdersSchema);

module.exports = OrdersModel;
