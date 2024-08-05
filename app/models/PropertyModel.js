import mongoose, { Schema } from "mongoose";

const PropertySchema = new Schema(
  {
    name: String,
    description: String,
    address: String,
    price: String,
    images: [{ name: String }],
    locatedAt: String,
    mapsLink: String,
    typeOfProperty: {
      bhk: Number,
    },
    channelpartners: [{ name: String, location: String ,ph_number: Number}],
  },
  {
    timestamps: true,
  }
);

const Properties = mongoose.model("Properties", PropertySchema);
export default Properties;
