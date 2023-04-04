const button = document.querySelector("#generate");

document.addEventListener('DOMContentLoaded', () =>
{
    button.addEventListener('click', generateJoke);
});

function generateJoke() {
    let paragraph = document.querySelector("#joke");

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(data) 
    {
        let joke = data.joke;
        paragraph.innerHTML = joke;
    }); 
}