const OrdersModel = require('../models/orders.model');

const InsertOrder = async (order) => {
  const resInsert = await OrdersModel.create(order);
  return resInsert;
};

const GetOrders = async () => {
  const resOrderss = await OrdersModel.find({});
  return resOrderss;
};

const GetOrder = async (id) => {
  const resOrders = await OrdersModel.findOne({ _id: id });
  return resOrders;
};

const UpdateOrder = async (id, data) => {
  const resOrders = await OrdersModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
  return resOrders;
};

const DeleteOrder = async (id) => {
  const resOrders = await OrdersModel.findOneAndRemove({ _id: id });
  return resOrders;
};
module.exports = {
  InsertOrder,
  GetOrder,
  GetOrders,
  UpdateOrder,
  DeleteOrder,
};
