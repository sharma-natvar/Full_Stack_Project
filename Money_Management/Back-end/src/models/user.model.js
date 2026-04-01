const { required } = require("joi");
const { default: mongoose } = require("mongoose");
const validate = require("../middleware/validate.middleware");
const validator = require("validator");
const { DEVICE_TYPE } = require("../helper/constant.helper");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number",
          );
        }
      },
    },
    device_info: [
      {
        device_id: {
          type: String,
          trim: true,
        },
        device_type: {
          type: String,
          trim: true,
          enum: [DEVICE_TYPE.ANDROID, DEVICE_TYPE.IOS, DEVICE_TYPE.WEB],
        },
        device_token: {
          type: String,
          trim: true,
        },
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
