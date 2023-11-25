import mg from 'mongoose';

const taskSchema = new mg.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mg.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    deadLine: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      default: 'pending',
    },
    isPrivate: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mg.model('Task', taskSchema);
