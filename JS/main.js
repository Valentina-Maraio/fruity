    axios({
        method: 'GET',
        url: 'https://www.fruityvice.com/api/fruit/all'
    }).then(res => {
        const fruitName = document.getElementById('name')
        const fruitFamily = document.getElementById('family')
        const fragment = document.createDocumentFragment()
        for(const fruit of res.data) {
            const fruitNameH2 = document.createElement('h2')
            fruitNameH2.textContent = `${fruit.name}`
            const fruitFamilyH3 = document.createElement('h3')
            fruitFamilyH3.textContent = `${fruit.family}`
            fragment.appendChild(fruitNameH2)
            fragment.appendChild(fruitFamilyH3)
        }
        fruitName.appendChild(fragment)
        fruitFamily.appendChild(fragment)
    })
    .catch(error => console.log(error))
