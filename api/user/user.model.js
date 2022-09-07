import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  paymentMethodId: String,
  brand: String,
  country: String,
  expMonth: Number,
  expYear: Number,
  funding: String,
  last4: String,
});

const Payments = new mongoose.Schema({
  customerId: String,
  cards: [CardSchema],
});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: "string",
      required: true,
      minlength: 6,
    },
    avatar: {
      type: "string",
      default: "https://example",
    },
    role: {
      type: "string",
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: "boolean",
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    payments: [Payments],
  },
  { timestamps: true }
);

UserSchema.virtual("fullName").get(function () {
  const { firstName, lastName } = this;
  return `${firstName} ${lastName}`;
});

UserSchema.virtual("profile").get(function () {
  const { firstName, lastName, email, password, role } = this;
  return {
    firstName,
    lastName,
    email,
    password,
    role,
  };
});

const User = mongoose.model("User", UserSchema);

export default User;
