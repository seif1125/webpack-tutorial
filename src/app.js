import ComponentService from "./resultcontainer";
import AlertService from "./alertcontainer";
import inputsAreValid from "./utils/inputsAreValid";
import parseInputs from "./utils/parseInput";
const alertService = new AlertService();
const componentService = new ComponentService();

const run = () => {
 
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
export default run;
