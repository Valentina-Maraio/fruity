const searchBox = document.createElement('div');
searchBox.style.cssText = 
    `width: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    
    margin-bottom: 50px;`
document.body.appendChild(searchBox)

//searchbar
searchBar = document.createElement('input');
searchBar.id = "searchBar"
searchBar.innerHTML = "Search..."
searchBox.style.cssText = 
        `color: black;`
searchBox.appendChild(searchBar)


//axios call
axios({
    method: "GET",
    url: 'https://www.fruityvice.com/api/fruit/all'
})
.then(res => {
    const wrapper = document.createElement('div');
    wrapper.id = "wrapper"
    wrapper.style.cssText = 
            `width: auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;`
    document.body.appendChild(wrapper)

    searchBtn = document.createElement('button');
    searchBtn.innerHTML = "GO"
    searchBox.appendChild(searchBtn)

    for (const fruit of res.data){
        const box = document.createElement('div');
        box.id = `${fruit.name}`
        box.style.cssText =
            `color: black !important;
            background-color: lightgreen;
            width: 200px;
            height: 300px;
            text-align: center;
            border-radius: 10px;
            padding: 10px;
            
            justify-content: center
            display: grid;
            grid-gap: 2em;
            margin: 10px;
            border: 1px solid black;`
        wrapper.appendChild(box);
    
        const title = document.createElement('h3');
        title.textContent = `Name: ${fruit.name}`
        title.style.cssText = 
            `color: black;`
        box.appendChild(title);
    
        const family = document.createElement('h5');
        family.textContent = `Family: ${fruit.family}`
        box.appendChild(family);

        //info button
        const btn = document.createElement('button');
        btn.innerText = "INFO";
        btn.style.cssText = 
            `background-color: orange;
            width: 90px;
            border-radius: 10px;`
        btn.value = "moreInfo"
        btn.id = "infoButton"

        btn.onclick = function (){

            const carbs = document.createElement('p');
            carbs.innerHTML = `Carbs: ${fruit.nutritions.carbohydrates}`
            carbs.style.cssText = 
                `color: black;`
            box.appendChild(carbs);

            const prot = document.createElement('p')
            prot.innerHTML = `Protein: ${fruit.nutritions.protein}`
            prot.style.cssText = 
                `color: black;`
            box.appendChild(prot);

            const fat = document.createElement('p')
            fat.innerHTML = `Fat: ${fruit.nutritions.fat}`
            fat.style.cssText = 
                `color: black;`
            box.appendChild(fat);

            const cal = document.createElement('p')
            cal.innerHTML = `Calories: ${fruit.nutritions.calories}`
            cal.style.cssText = 
                `color: black;`
            box.appendChild(cal);

            const sugar = document.createElement('p')
            sugar.innerHTML = `Sugar: ${fruit.nutritions.sugar}`
            sugar.style.cssText = 
                `color: black;`
            box.appendChild(sugar);

        };

        box.appendChild(btn)
    }
})
.catch (e => console.log(e))
