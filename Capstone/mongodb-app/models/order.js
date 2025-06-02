const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      customCardId: { type: mongoose.Schema.Types.ObjectId, ref: "CustomCard" },
      quantity: { type: Number, default: 1 },
    },
  ],
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order", orderSchema);
