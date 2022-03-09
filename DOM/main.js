//trasformare un API content in Array
const fruits = [];
const nutritions = [];

fetch('https://www.fruityvice.com/api/fruit/all')
.then(response => response.json())
.then(function (result) {
    console.log('Fruits: ', result)
    for(i = 0; i < result.length; i++) {
        fruits.push(result[i])
    }
    //nutritions non funziona
    for(n = 0; n < result.length; n++){
        nutritions.push(result[n])
    }
})
.catch(error => console.log('error', error))
