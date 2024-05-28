const asyncHandler=(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
}
}

export {asyncHandler}

// const  asyncHandler=(fn)=> async(req,res,next,err)=>{
// try{
// await fn(req,res.next)
// }
// catch(error){
//     console.log(res.status);
//     res.status(err.code || 500).json({
//         success:false,
//         message
//     })
// }
// }