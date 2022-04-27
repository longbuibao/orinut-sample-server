const mongoose = require("mongoose")

const { Schema } = mongoose

const orderSchema = new Schema({
  productIds: [String],
  quantities: [Number],
  totalPrice: Number,
  name: String,
  phone: String,
  email: String,
  address: String,
  selectedWard: {
    value: Number,
    label: String,
  },
  selectedDistrict: {
    value: Number,
    label: String,
  },
  selectedCity: {
    value: Number,
    label: String,
  },
  date: String,
  payMethod: String,
  fbUserId: String,
  googleUserId: String,
})

const Order = new mongoose.model("orders", orderSchema)
module.exports = Order
