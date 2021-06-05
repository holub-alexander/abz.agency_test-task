class ValidationError extends Error {
  constructor(message = null, obj) {
    super();
    this.message = message;
    this.obj = obj;
  }
}

export default ValidationError;
