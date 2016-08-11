describe('test', () => {
  contract('Contract', () => {
    it('send to deployed address', () => {
      const contract = Contract.deployed()
      const initialBalance = web3.eth.getBalance(web3.eth.accounts[1])
      console.log(web3.fromWei(initialBalance).toString())
      web3.eth.sendTransaction({ from: web3.eth.accounts[1], to: contract.address, value: web3.toWei(100) })

      const finalBalance = web3.eth.getBalance(web3.eth.accounts[1])
      console.log(web3.fromWei(finalBalance).toString())

      const diff = web3.fromWei(initialBalance.minus(finalBalance))
      console.log('initialBalance - finalBalance == ' + diff)

      assert(diff > 99 && diff < 101, 'Balance after is not ~100 less than balance before.')
    })
  })
})
