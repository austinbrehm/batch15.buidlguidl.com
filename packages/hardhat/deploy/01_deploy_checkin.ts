import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deployments, ethers } = hre;
  const { deploy } = deployments;

  await deploy("CheckIn", {
    from: deployer,
    args: ["0xa10cd1ccb734f7662b319d26cb57c091a6af921e"],
    log: true,
    autoMine: true,
  });

  const checkIn = await ethers.getContract("CheckIn");
  console.log("✅ CheckIn contract deployed at:", await checkIn.getAddress());
};

export default deployCheckIn;

deployCheckIn.tags = ["CheckIn"];
