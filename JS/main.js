fetch('https://rickandmortyapi.com/api/character/')
.then(res => res.json())
.then(characters => showCharacters(characters.results));

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

        characterButton.addEventListener('click', function() {
            fetch('https://rickandmortyapi.com/api/location')
            .then(function (result) {
                console.log(result.location);
            })
            .catch(function (e) {
                console.log(e);
            });
        });
    });
}

