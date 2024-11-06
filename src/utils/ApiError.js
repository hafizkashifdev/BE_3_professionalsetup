class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Corrected from 'supper' to 'super'
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;
        // Stack trace info
        if (stack) {
            this.stack = stack;                                             
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
