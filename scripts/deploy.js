async function main() {
    // Get the contract factory
    const AreaCalculator = await ethers.getContractFactory("AreaCalculator");
  
    // Deploy the contract
    const areaCalculator = await AreaCalculator.deploy();
  
    // Wait for the contract to be deployed
    await areaCalculator.deployed();
  
    console.log("AreaCalculator deployed to:", areaCalculator.address);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  