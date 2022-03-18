//search BOX div
const searchBox = document.createElement("div");
searchBox.style.cssText = 
`width: auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
position: absolute;
margin-bottom: 50px;`;
document.body.appendChild(searchBox);

//searchbar
const searchBar = document.createElement("input");
searchBar.id = "searchBar";
searchBar.innerHTML = "Search...";
searchBar.style.cssText = 
`color: black;
display: flex;
justify-content: center;
padding: 10px;`
searchBox.appendChild(searchBar);

let fruits = [];
const fruitInfo = document.createElement("fruitInfo");
document.body.appendChild(fruitInfo);

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

const showSearch = (fruits) => {
  const showResData = fruits
    .map((fruit) => {
      return `
            <li class="fruit">
                <h2>${fruit.name}</h2>
                <h3>Family: ${fruit.family}</h3>
                <h4>Nutritions Info</h4>
                <p>Carbs: ${fruit.nutritions.carbohydrates}</p>
                <p>Protein: ${fruit.nutritions.protein}</p>
                <p>Fat: ${fruit.nutritions.fat}</p>
                <p>Calories: ${fruit.nutritions.calories}</p>
                <p>Sugar: ${fruit.nutritions.sugar}</p>
            </li>
        `;
    })
    .join("");
  fruitInfo.innerHTML = showResData;
};

inputCall();
