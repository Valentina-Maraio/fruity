
//here we use window as a global object:
function sayHi(){
    //alert("Ciao Valentina");
    //inner window height
    //alert(window.innerHeight);
}
//global functions are methods of the global object:
//window.sayHi();

//cambia il colore del body per 1 secondo poi torna come prima
//document.body.style.background = "orange";
//setTimeout(() => document.body.style.background = "", 1000);

//BOM
//Browser Object Model

//show current URL
//alert(location.href);
//if(confirm("Go to Wikipedia?")) {
    //redirect the browser to another URL
    //location.href = "https://wikipedia.org";
//}

//more info about fruit
function moreInfo(data){
    const infoBox = document.createElement('div')
    infoBox.style.cssText = `width: 500px; height: 500px; display: none;`
    document.body.appendChild(infoBox)

    const infoSingleCard = document.createElement('div')
    infoSingleCard.style.cssText = 
            `color: black !important;
            background-color: lightgreen;
            width: 200px;
            height: 180px;
            text-align: center;
            border-radius: 10px;
            padding: 10px;
            
            justify-content: center
            display: grid;
            grid-gap: 2em;
            margin: 10px;
            border: 1px solid black;`
    infoBox.appendChild(infoSingleCard)
    

    const carbs = document.createElement('li');
    carbs.innerHTML = `Carbs: ${data.name}`
    carbs.style.cssText = 
        `color: black;`
    infoSingleCard.appendChild(carbs);
    
    const prot = document.createElement('li')
    prot.innerHTML = `Protein: ${data.protein}`
    prot.style.cssText = 
        `color: black;`
    infoSingleCard.appendChild(prot);

    /*const fat = document.createElement('fat')
    const cal = document.createElement('cal')
    const sugar = document.createElement('sugar')*/
}

//document.getElementsByTagName("body").style.display =
/*`   display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3em 2em 3em 2em;
    grid-gap: 1em;
    width: 73vmin;
    margin: auto;
    border-radius: 10px;
    border: 2px solid black;`*/
    
//axios call
axios({
    method: "GET",
    url: 'https://www.fruityvice.com/api/fruit/all'
})
.then(res => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 
            `width: auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;`
    document.body.appendChild(wrapper)
    
    for (const fruit of res.data){
        const box = document.createElement('div');
        box.style.cssText =
            `color: black !important;
            background-color: lightgreen;
            width: 200px;
            height: 180px;
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
    
        const btn = document.createElement('button');
        btn.innerText = "INFO";
        btn.style.cssText = 
            `background-color: orange;
            width: 90px;
            border-radius: 10px;`
        btn.value = "moreInfo"
        btn.id = "infoButton"
        btn.addEventListener('click', moreInfo);
        box.appendChild(btn)
    }
})
.catch (e => console.log(e))
