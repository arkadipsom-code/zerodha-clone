const { model } = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

const OrdersModel = model("Orders", OrdersSchema, "orders");

module.exports = OrdersModel;
