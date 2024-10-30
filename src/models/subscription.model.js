import mongoose ,{schema} from mongoose

const subsciptionschema = new mongoose.Schema({ 
    subscriber:{
        type:SchemaType.ObjectId,   one who is subscribring
        ref:"user",
    },
    channel:{
        type:SchemaType.ObjectId, //   one whom subscribing
        ref:"user",
    }
 },{timestamps:true})

export const Subscription = mongoose.model("subscription",subsciptionschema)