const fetch = require('node-fetch')
module.exports = {
    calculatePrice : (args, obj, context, info) => {
   const type = args.type
   const exchangeRate = args.exchangeRate
   
 return fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
  .then(res => res.json())
  .then(json => {
      const btcRate = json.bpi.USD.rate_float
      const marginPercent = args.margin * btcRate
      
      if(type.toLowerCase() === "buy") {
       const computedValue = btcRate + marginPercent
       const finalValue = computedValue/exchangeRate
       return finalValue.toFixed(2)
      }
      else if (type.toLowerCase() === "sell") {
          const computedValue = btcRate - marginPercent
        const finalValue = computedValue/exchangeRate
        return finalValue.toFixed(2)
      }
      
  })
  .catch(err => console.log(err))
 
    }

  }