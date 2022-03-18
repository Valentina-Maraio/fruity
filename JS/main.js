//axios call    ORIGINALE
axios({
    method: "GET",
    url: 'https://www.fruityvice.com/api/fruit/all'
})
.then(res => {
    const wrapper = document.createElement('div');
    wrapper.id = "wrapper"
    wrapper.style.cssText = 
            `width: auto;
            padding-top: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;`
    document.body.appendChild(wrapper)

     //search BOX div
     const searchBox = document.createElement("div");
     searchBox.style.cssText = 
     `color: black !important;
     background-color: lightgreen;
     width: 400px;
     height: 300px;
     text-align: center;
     border-radius: 10px;
     border: 1px solid black;
     margin: auto;
     width: 50%;
     padding: 10px;
     margin-top: 20px;`
     document.body.appendChild(searchBox);
 
     //searchbar
     const searchBar = document.createElement("input");
     searchBar.id = "searchBar";
     searchBar.innerHTML = "Search...";
     searchBar.style.cssText = 
     `color: black;
     display: flex;
     width: 250px;
     justify-content: center;`
     searchBox.appendChild(searchBar);
 
     let fruits = [];
     const fruitInfo = document.createElement("fruitInfo");
     searchBox.appendChild(fruitInfo);
 
     searchBar.addEventListener("keyup", (e) => {
     const input = e.target.value.toLowerCase();
 
     const fruitFilter = fruits.filter((fruit) => {
         return fruit.name.toLowerCase().match(input);
     });
     showSearch(fruitFilter);
     });
 
     const inputCall = async () => {
     try {
         const res = await fetch("https://www.fruityvice.com/api/fruit/all");
         fruits = await res.json();
     } catch (err) {
         console.error(err);
     }
     };
 
     const showSearch = function(fruits) {
         let showResData = fruits.map((fruit) => {
             return `
             <div>
                 <h4>${fruit.name}</h4>
                 <h5>Family: ${fruit.family}</h5>
                 <p>Carbs: ${fruit.nutritions.carbohydrates}</p>
                 <p>Protein: ${fruit.nutritions.protein}</p>
                 <p>Fat: ${fruit.nutritions.fat}</p>
                 <p>Calories: ${fruit.nutritions.calories}</p>
                 <p>Sugar: ${fruit.nutritions.sugar}</p>
             </div>
         `;
         })
         .join('');
         fruitInfo.innerHTML = showResData;
     };
 
     inputCall();
     
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
