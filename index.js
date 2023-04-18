let baseUrl = "https://api.coinranking.com/v2/coins"
let proxyUrl = "https://cors-anywhere.herokuapp.com/"
let apiKey = "coinrankingfe18f4e96082f1f780c7c4bfa6372c081e3d2984fcee6791"

fetch(`${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)
            let coinsData = json.data.coins
            let statsData = json.data.stats
            console.log(statsData)
            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }
            
            coinsData.forEach((coin) => {
                cryptoCoins += `
                <tr class="tr" id="tr">
                    <td><i class="bi bi-star"></i></td>
                    <td id="rank">${coin.rank}</td>
                    <td>
                        <div class="name-td">
                            <img class="coin-icon" src="${coin.iconUrl}">
                            <div class="coin-name">
                                <p class="proper-name">${coin.name}</p>
                                <p class="symbol">${coin.symbol}</p>
                            </div>
                        </div>
                    </td>
                    <td></td>
                    <td class="prices">$${Math.round(coin.price * 100) / 100}</td>
                    <td class="" id="coin-change">${coin.change}</td>
                    <td>${coin.btcPrice} BTC</td>
                    <td>$${Math.round((coin.marketCap / 1000000000)*100)/100} B</td>
                    <td>Chart Placeholder</td>
                </tr>`;
            })
            document.getElementById('coins-body').innerHTML = cryptoCoins

            coinStats = `<div class="total-market">
                <p class="small-text">TOTAL MARKETS</p>
                <P class="big-text">${statsData.totalMarkets} Markets</P>
            </div>
            <div class="market-cap">
                <p class="small-text">TOTAL MARKET CAP</p>
                <P class="big-text">$ ${statsData.totalMarketCap}</P>
            </div>
            <div class="total-volume">
                <p class="small-text">24H MARKET VOLUME</p>
                <P class="big-text">$ ${statsData.total24hVolume}</P>
            </div>`;

            document.getElementById('top-information').innerHTML = coinStats
            


            const trClass = document.querySelectorAll("#tr")
            const ranks = document.querySelectorAll("#rank")
            ranks.forEach((rank) => {
                if (rank.innerHTML === '1') {
                    rank.classList.add('number1')
                } else if (rank.innerHTML === '2') {
                    rank.classList.add('number2')
                } else if (rank.innerHTML === '3') {
                    rank.classList.add('number3')
                } else if (rank.innerHTML === '4') {
                    rank.classList.add('number4')
                }
            })


            const coinChange = document.querySelectorAll("#coin-change");
            coinChange.forEach((change) => {
                if (change.innerHTML > 0){
                    change.classList.add('green')
                } else
                    change.classList.add('red')
            })
        })
    }
}).catch((error) => {
    console.log(error)
})
