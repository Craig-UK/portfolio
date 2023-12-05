import { Schema, model, models } from "mongoose";

const RegularCommissionsSchema = new Schema({
  uniqueNumber: {
    type: String,
  },
  name: {
    type: String,
    ref: "Your Name",
  },
  email: {
    type: String,
    ref: "Personal Email",
  },
  commissionPlan: {
    type: String,
  },
  message: {
    type: String,
  },
  agreedToPrivacyPolicyAndTerms: {
    type: String,
  },
  status: {
    type: String,
  }
});

const RegularCommission =
  models.RegularCommission ||
  model("RegularCommission", RegularCommissionsSchema);

export default RegularCommission;
