const inputRules = {
  required: {
    value: true,
    message: 'Enter a number',
  },
  pattern: {
    value: /^\d+(\.\d+)?$/,
    message: 'Not a valid number',
  },
};

export { inputRules };
