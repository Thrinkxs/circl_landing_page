import mongoose, {InferSchemaType} from "mongoose";

const waitListSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: true,
        unique: true,
    }
},
{ timestamps: true})

type WaitList = InferSchemaType<typeof waitListSchema>;
const WaitList = mongoose.models.WaitList || mongoose.model<WaitList>("WaitList", waitListSchema);

export default WaitList;


