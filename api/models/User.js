require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.ConnectionString).catch((err) => {
  console.log("Error in connect");
});

const Schema = {
  name: {
    type: String,
  },
  family: {
    type: String,
  },
  age: {
    type: Number,
    min: 1,
    max: 99,
  },
  job: {
    type: String,
  },
  address: {
    type: String,
  },
  isArchive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
};
const userModel = mongoose.model("users", Schema);

async function GetAll() {
  return await userModel.find({});
}

async function Remove(objectId) {
  if (mongoose.isValidObjectId(objectId)) {
    return await userModel.findByIdAndDelete({ _id: objectId });
  } else {
    return false;
  }
}

async function Add(doc) {
  if (await new userModel(doc).save()) {
    return true;
  } else {
    return false;
  }
}

module.exports = { Schema, GetAll, Remove, Add };