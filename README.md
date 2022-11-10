# Getting Started
## Prerequites
1. Create an alchemy app
- From Alchemy's dashboard, hover over the Apps drop-down menu and choose Create App.
- Provide a Name and Description for your app.
- For Chain, select Polygon and for Network select Polygon Mumbai.
- Click the Create App button.
- Once you have created your app, click on your app's View Key button in the dashboard and save the API KEY. We will use this later.
2. Create a Metamask Wallet
- Connect your Metamask Wallet to Mumbai => https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f
3. Add ETH from a Faucet
- Check https://faucet.polygon.technology/
4. Fill in .env file

## Run apps
1. Download the codes from Github
2. Run `npx hardhat run scripts/deploy.js --network matic`
- You have deployed the contract to the chain
- Copy the contract address
3. Mint NFT
- Replace the contractAddress
- Run `node scripts/mint.js`
- You should be able to find the minted NFT on `https://testnets.opensea.io` by searching on the contract address
4. Burn NFT
- Replace the contractAddress
- Run `node scripts/burn.js`
