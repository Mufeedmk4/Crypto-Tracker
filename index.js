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
            console.log(json)
        })
    }
}).catch((error) => {
    console.log(error)
})