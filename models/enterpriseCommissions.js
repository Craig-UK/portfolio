import { Schema, model, models } from "mongoose";

const EnterpriseCommissionsSchema = new Schema({
  uniqueNumber: {
    type: String,
  },
  name: {
    type: String,
    ref: "Your Name",
  },
  businessName: {
    type: String,
    ref: "Businesses Name",
  },
  email: {
    type: String,
    ref: "Personal Email",
  },
  businessEmail: {
    type: String,
    ref: "Business Email",
  },
  businessLinkedIn: {
    type: String,
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

const EnterpriseCommission =
  models.EnterpriseCommission ||
  model("EnterpriseCommission", EnterpriseCommissionsSchema);

export default EnterpriseCommission;
