// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      // allow the node to bind to all interfaces on Render
      host: "0.0.0.0",
      port: 8545,
      chainId: 31337,
    }
  }
};
