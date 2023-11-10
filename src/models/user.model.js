import mg from 'mongoose';

const userSchema = new mg.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },

    avatar: {
      type: String,
      default:
        'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg',
    },
  },

  {
    timestamps: true,
  }
);

export default mg.model('User', userSchema);
