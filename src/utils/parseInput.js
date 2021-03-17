const parseInputs = (...inputDom) => {
  return inputDom.map((strValueDom) => parseInt(strValueDom));
};
export default parseInputs;
