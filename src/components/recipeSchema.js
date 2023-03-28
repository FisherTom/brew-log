const mongoose = require("mongoose");

const amountSchema = mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  abv: {
    type: Number,
    required: true,
  },
  target_fg: {
    type: Number,
    required: true,
  },
  target_og: {
    type: Number,
    required: true,
  },
  description: String,
  image_url: String,
  notes: String,
  created_by: String,
  volume: amountSchema,
  boil_volume: amountSchema,
  method: {
    mash_temp: [
      {
        temp: amountSchema,
        duration: Number,
      },
    ],
    fermentation: {
      temp: amountSchema,
    },
  },
  ingredients: {
    malt: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: amountSchema,
      },
    ],
    hops: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: amountSchema,
        add: {
          type: String,
          required: true,
        },
      },
    ],
    yeast: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("recipes", recipeSchema);
