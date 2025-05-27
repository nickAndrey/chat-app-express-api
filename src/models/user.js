import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: [true, 'User with provided email already exists'],
      required: [true, 'User email is required'],
      validate: {
        validator: function (value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(value);
        },
        msg: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: [true, 'Username is required'],
    },
  },
  { timestamps: true }
);

userSchema.index(
  {
    username: 'text',
    email: 'text',
  },
  {
    weights: {
      username: 10,
      email: 5,
    },
  }
);

export default model('User', userSchema);
