require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember solid idea glide force skate'; 
let testAccounts = [
"0x48e23e487573db192f084dacf9ed7286d2b0775525908b6fac1a1be6b7483ee7",
"0x5489d2cffc4b812fb3d3a705d24cb6c714917480ae983df0cc8f5ac71fbb1408",
"0x1039cc8df529bee6707f537c8a76e3a4d1dea237408e139bebed163c382ba915",
"0xfb7077886bf722887c38776bf96255df170a22e55b3b4bba052296f215250a36",
"0x63254cfa47488483e6dfbeb8f699a2bf09c7ae14052bd27fe1817ef98556e3dd",
"0x02c4b8a82b2d7a827966d95f7c8779b44c5f6876d1da418ded482d288420ae07",
"0x8c1638742b2684cadc6a00542c940433c41d9a4f144df2afd9da7ce8e9ff2ceb",
"0x682666c84486c17d2c43833221b5db3f336684d92fbceaf42e79f68cf622b8cb",
"0x94e9c8dbd1fe2f86258634cba8a8ba8aa26b2cc3efd3341af535bd7ce6c6c13a",
"0xe511ffa397c91974b47f6e5e440f4215bcbdb2304fd53964b225e0fac3ea7cc8"
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

