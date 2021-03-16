const inputsAreValid = (...inputNumbers) => {
  return inputNumbers.every((num) => typeof num === "number" && !isNaN(num));
};
