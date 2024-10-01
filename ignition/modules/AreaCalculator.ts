import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const AreaCalculatorModule = buildModule("AreaCalculatorModule", (m) => {

  const calculator = m.contract("AreaCalculator");

  return { calculator };
});

export default AreaCalculatorModule;
