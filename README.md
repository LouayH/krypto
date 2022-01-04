# Krypto - Web 3 Application

### Initialize react application via vite

`npm init vite@latest`

### Install tailwindcss and its peer dependencies

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

### Install react-icons
`npm install react-icons`

### Initialize hardhat application
`npm init -y`
`npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers`
`npx hardhat`

### Config hardhat with network
`npm install dotenv`

### Create Transactions contract and deploy it
`npx hardhat run scripts/deploy.js --network ropsten`