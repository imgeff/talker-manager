function fieldVerification(field, condition, errorMsg1, errorMsg2) {
  if (field === undefined) return errorMsg1;
  if (condition) return errorMsg2;
}

module.exports = fieldVerification;