//slider
const persons = Array.from(document.querySelectorAll('.person'));

const slide = () => {
    let x = 620;
    let Pos1 = persons[0].getBoundingClientRect().x;
    for(let i = 0; i < persons.length; i++){
        persons[i].style.left = `${persons[i].getBoundingClientRect().x + x}px`;
    }
    
}


// setInterval(() => {
//     slide();
// }, 1000)

// slide();
