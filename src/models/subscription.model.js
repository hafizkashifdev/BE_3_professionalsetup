import mongoose ,{schema} from mongoose

const subscriptionSchema = new mongoose.Schema({ 
    subscriber:{
        type:SchemaType.ObjectId,  // one who is subscribing
        ref:"user",
    },
    channel:{
        type:SchemaType.ObjectId, //   one whom 'subscriber' is subscribing
        ref:"user",
    }
 },{timestamps:true})

export const Subscription = mongoose.model("subscription",subscriptionSchema)