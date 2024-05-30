class APiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        stack=""
    ){
    // override krny wali chezzeen assignment this.data field mn kia hota hy 
        supper(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
// stack trace ky yaha yaha in file mn dikat hy but production grade mn in file ko hataty bhi hen 
if(stack){
    this.stack=stack
}
else{
    Error.captureStackTrace(this,this.constructor)
}


    }
}

export default APiError