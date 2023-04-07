const generate = document.querySelector("#generate");
const apply = document.querySelector("#apply");

document.addEventListener('DOMContentLoaded', () =>
{
    generate.addEventListener('click', generateJoke);
    apply.addEventListener('click', applyChanges);
});

async function generateJoke() {
    let paragraph = document.querySelector("#joke");

    try {
        let response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        let data = await response.json();
        paragraph.innerHTML = data.joke;

    } catch (error) {
        console.error(error);
    }
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