var assert = require('assert')

describe('Web3 stage tests', function() {
    describe('Test web3 functions', () => {
        it('Should return account balance', () => {
            web3.eth.getBalance(account, (err, wei) => {
                balance = web3.utils.fromWei(wei, "ether");
                assert(balance >= 0);
              });
        });
        it('should return seller address', async () => {
            
        });
    
        it('should return transaction information', async () => {
            
        });
    
        it('should return keccak256 hash', async () => {
            
        });
    
        it('should return random hex', async () => {
            
        });
    
        it('should return block number', async () => {
            
        });
     });    
  });
