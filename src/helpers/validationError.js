class ValidationError extends Error {
  constructor(errObj) {
    super();
    this.errObj = errObj;
  }
}

export default ValidationError;
