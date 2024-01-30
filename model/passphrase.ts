import mongoose from "mongoose";

const PassPhraseSchema = new mongoose.Schema(
  {
    passphrase: {
      type: [String],
      required: [true, "Please input your passphrase"],
    },
  },
  { timestamps: true }
);


export const PassPhrase = mongoose.models.PassPhrase || mongoose.model('PassPhrase', PassPhraseSchema)