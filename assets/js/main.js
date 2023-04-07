const generate = document.querySelector("#generate");
const apply = document.querySelector("#apply");

document.addEventListener('DOMContentLoaded', () =>
{
    generate.addEventListener('click', generateJoke);
    apply.addEventListener('click', applyChanges);
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

function applyChanges() {
    let radioButtons = document.querySelectorAll(".form-check-input");
    let option;
    
    for (var i = 0; i < radioButtons.length; i++) {
        
        if (radioButtons[i].checked) {
            option = radioButtons[i].value;
        }
    }
    
    let themes = ['Napoli', 'Manchester-United', 'Wolfsburg'];
    let body = document.querySelector('body');

    themes.forEach(theme => {
        
        body.classList.remove(theme);
    });

    body.classList.add(option);
}