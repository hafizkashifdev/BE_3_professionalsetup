import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema ({               

videoFile:{
    type:String, // cloudinaery url
    required:true,
      
},
thumbNail:{
    type:String, // cloudinaery url
    required:true,
      
}
,
title:{
    type:String, 
    required:true,
      
},
description:{
    type:String, 
    required:true,
      
},
duration:{
    type:Number, // cloudinaery url
    required:true,
      
},
views:{
    type:Number, 
    default:0
},
isPublished:{
    type:Boolean, 
    default:0
},
owner:{
    type:Schema.Types.ObjectId, 
    refer:"user"
}




},{
    timestamps:true
}) 


export  default Video=mongoose.model("Video",videoSchema)