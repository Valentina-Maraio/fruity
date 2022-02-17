fetch('https://rickandmortyapi.com/api/character/')
.then(res => res.json())
.then(characters => showCharacters(characters.results));

fetch('https://rickandmortyapi.com/api/character/')
.then(res => res.json())
.then(characters => characterStatus(characters.results));

showCharacters = characters => { 
    const charactersDiv = document.querySelector('#ram'); 
    characters.forEach(character => {
        const characterElement = document.createElement('p');
        characterElement.innerText = `Character Name: ${character.name}`;
        charactersDiv.append(characterElement);

        //buttons
        const characterButton = document.createElement('button');
        characterButton.innerHTML = 'Click';
        charactersDiv.append(characterButton);
    });
}

characterStatus = characters => { 
    const charactersDiv = document.querySelector('#ram'); 
    characters.forEach(character => {
        //buttons
        const characterButton = document.createElement('button');
        characterButton.innerHTML = onclick(`${character.characterStatus}`)
        charactersDiv.append(characterButton);
    });
}

