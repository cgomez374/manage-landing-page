const persons = document.querySelectorAll('.person');
const slideContainer = document.querySelector('.testomonials');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function handleClick(direction){
    if(direction > 0){
        persons.forEach(person => {
            person.style.transform = `translate(-${350}px)`;
        });
    }
    else if(direction < 0) {
        persons.forEach(person => {
            person.style.transform = `translate(${350}px)`;
        });
    }
}

next.addEventListener('click', () => handleClick(1));
prev.addEventListener('click', () => handleClick(-1));





