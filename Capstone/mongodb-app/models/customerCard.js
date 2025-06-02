const mongoose = require("mongoose");
const customCardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
    required: true,
  },
  title: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});
module.export = mongoose.model("CustomCard", customCardSchema);
