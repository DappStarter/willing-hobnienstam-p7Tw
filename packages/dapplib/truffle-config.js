require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note payment unable hover enroll fortune toward'; 
let testAccounts = [
"0x8737c0a7f3effd8d4b87091bf91bbfb3828abaee902a3665229673a79e915704",
"0x50fbddf65f751f7dd95846cc3fd2f2768bcb44b085e5e29a3d7d1776966342b5",
"0xb3757ff791eb4692bbcfed98e4bd670a9cb41bd93ac5a5e191c0dffe4e687877",
"0x093adb357e3922ec23097b76d23cd40778bd286c67dd1ff3c4478ba0282832d7",
"0xde1734ded023a001d836926a7d1d73a8316c64143eff16f8ae20c1cad0638c8b",
"0x4f620e4e2b39ee1e7c1e669bdba806888e6f2be9b33555a388486b1dcc70c0ea",
"0xf28a5e41a2ecc28335eac67654d229da6e472b2b9bb5c338e0a9c1f86ab15cfd",
"0x34cf904c740dd3c070f62b019ddcdb9e4fb2b537cac473b9f4dfdc6f2564f67c",
"0xd6ad37ec5dec428a396af57d1dd88e5f79cc91ec5d876598afdd3b16438ab0c6",
"0xe98a13971c2cd6d8d2485c8c9f36e15cdc081f9b5a1ef2d8b34e895e015e858b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

