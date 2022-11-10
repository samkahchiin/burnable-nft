async function main() {
  // Grab the contract factory
  const Burnable = await ethers.getContractFactory("BurnableNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const BurnableNFT = await Burnable.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", BurnableNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
