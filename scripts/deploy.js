const hre = require("hardhat");

async function main() {


    const CloneFactory = await hre.ethers.getContractFactory("CloneFactory");
    const cloneFactory = await CloneFactory.deploy();

    await cloneFactory.deployed();

    console.log(
        `CloneFactory deployed to ${cloneFactory.address}`
    );

    const ERC20V3Factory = await hre.ethers.getContractFactory("ERC20V3Factory");
    const eRC20V3Factory = await ERC20V3Factory.deploy(cloneFactory.address, "0xDF8ad2dAB1809B3C4D0BC25b84e2bB557Fcd2920", "0xDF8ad2dAB1809B3C4D0BC25b84e2bB557Fcd2920", "0xDF8ad2dAB1809B3C4D0BC25b84e2bB557Fcd2920", 1);

    await eRC20V3Factory.deployed();

  console.log(
      `ERC20V3Factory deployed to ${eRC20V3Factory.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
