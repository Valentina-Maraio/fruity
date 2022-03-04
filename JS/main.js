axios({
    method: 'GET',
    url: 'https://www.fruityvice.com/api/fruit/all'
}).then(res => {
    const fruitName = document.getElementById('name')
    const fruitFamily = document.getElementById('family')

    const carbs = document.getElementById('carbs')
    const prot = document.getElementById('prot')
    const fat = document.getElementById('fat')
    const cal = document.getElementById('cal')
    const sugar = document.getElementById('sugar')

    const fragment = document.createDocumentFragment()
    for(const fruit of res.data) {
        
        const fruitNameH2 = document.createElement('h2')
        fruitNameH2.textContent = `Name: ${fruit.name}`
        
        const fruitFamilyH3 = document.createElement('h3')
        fruitFamilyH3.textContent = `Family: ${fruit.family}`

        const fruitCarbs = document.createElement('li')
        fruitCarbs.textContent = `Carbs: ${fruit.nutritions.carbohydrates}`

        const fruitProt = document.createElement('li')
        fruitProt.textContent = `Protein: ${fruit.nutritions.protein}`

        const fruitFat = document.createElement('li')
        fruitFat.textContent = `Fat: ${fruit.nutritions.fat}`

        const fruitCal = document.createElement('li')
        fruitCal.textContent = `Cal: ${fruit.nutritions.calories}`

        const fruitSug = document.createElement('li')
        fruitSug.textContent = `Sugar: ${fruit.nutritions.sugar}`


        fragment.appendChild(fruitNameH2)
        fragment.appendChild(fruitFamilyH3)
        fragment.appendChild(fruitCarbs)
        fragment.appendChild(fruitProt)
        fragment.appendChild(fruitFat)
        fragment.appendChild(fruitCal)
        fragment.appendChild(fruitSug)
    }
    fruitName.appendChild(fragment)
    fruitFamily.appendChild(fragment)
    carbs.appendChild(fragment)
    prot.appendChild(fragment)
    fat.appendChild(fragment)
    cal.appendChild(fragment)
    sugar.appendChild(fragment)
})
.catch(error => console.log(error))


