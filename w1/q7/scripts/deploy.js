const { ethers, network, artifacts } = require("hardhat");


async function main() {
  // await hre.run('compile');
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();
  console.log("Counter deployed to:", counter.address);

  let Artifact = await artifacts.readArtifact("Counter");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });