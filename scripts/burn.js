const contractAddress = '0x270fb25662267f6B5f2D11245F06cD09aEc4a2fa'

require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('maticmum', API_KEY)
// const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contract = require("../artifacts/contracts/BurnableNFT.sol/BurnableNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Call burnNFT function
const burnNFT = async () => {
    let nftTxn = await myNftContract.burn()
    await nftTxn.wait()
    console.log(`NFT Burned! Check it out at: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`)
}

burnNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// After burning the NFT
// => https://mumbai.polygonscan.com/tx/0x566cf485f36c7b0d67d313ccd238a7cc174e2c5b6bc85c3033092fc9a7bf8c0e
