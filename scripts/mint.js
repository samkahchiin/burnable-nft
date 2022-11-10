// Opensea => https://testnets.opensea.io/assets/mumbai/0x270fb25662267f6b5f2d11245f06cd09aec4a2fa/1

const contractAddress = '0x270fb25662267f6B5f2D11245F06cD09aEc4a2fa'
// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmRnY14pVFPx1pSGBaetGapb8sNgkdpgoSNVemRntL7U6N"


require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('maticmum', API_KEY)
const contract = require("../artifacts/contracts/BurnableNFT.sol/BurnableNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
