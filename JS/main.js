console.log("sono in console")

const api = 'https://www.fruityvice.com/api/fruit/all';

function fruitCall(){

    let apiRes = 'http://www.fruityvice.com/api/fruit/all'

    fetch(apiRes)
    .then(res => res.json())
    .then(a => {
        console.log(a)
    })
}