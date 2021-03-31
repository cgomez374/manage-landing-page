//THIS FILE IS MAINLY TO CONTROL THE SLIDER

//GRAB ELEMENTS FROM DOC
const persons = document.querySelectorAll('.person');
const slideContainer = document.querySelector('.testomonials');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let screenWidth = window.screen.width;


//MOVE ALL IMAGES EITHER TO THE RIGHT OR LEFT DEPENDING ON ARROW CLICKED
function movePeople(direction){
    if(screenWidth >= 920){
        if(direction > 0){
                persons.forEach((person) => {
                    person.style.transform = `translate(-${screenWidth / 5.7}px)`;
                }); 
        }
        else if(direction < 0) {
            persons.forEach(person => {
                person.style.transform = `translate(${screenWidth / 5.7}px)`;
            });
        }
    }
    else if(screenWidth < 900){
        smallScreenSlider(direction);
    }
}


//SLIDER IS CHANGED TO A ONE SLIDE DISPLAY
function smallScreenSlider(direction){
    let current = persons[0];

    for(let i = 0; i < persons.length; i++){
        if(persons[i].classList.contains('active')){
            current = persons[i];
        }
    }

    //NEXT BUTTON IS CLICKED
    if(direction > 0){
        if(current.nextElementSibling !== null){
            //REMOVE CLASS HIDE
            current.nextElementSibling.classList.remove('hide');
            current.nextElementSibling.classList.add('active');
            
            //MOVE OUT OF SCREEN AND ADD CLASS HIDE
            current.style.transform = `translate(-${screenWidth * 2}px)`;
            current.nextElementSibling.style.transform = `translate(${screenWidth * 0.01}px)`;

            //ADD CLASS HIDE
            current.classList.remove('active');
            current.classList.add('hide');

        }
    }
    else if(direction < 0){
        if(current.previousElementSibling !== null){
            //MOVE OUT OF SCREEN
            current.style.transform = `translate(${screenWidth}px)`;

             //ADD CLASS HIDE AND REMOVE ACTIVE
            current.classList.remove('active');
            current.classList.add('hide');

            //MOVE PREV INTO SCREEN
            current.previousElementSibling.style.transform = `translate(-${screenWidth * 0.01}px)`;

            //ADD CLASS ACTIVE AND REMOVE HIDE
            current.previousElementSibling.classList.remove('hide');
            current.previousElementSibling.classList.add('active');

        }
    }
}


//EVENT LISTENERS
next.addEventListener('click', () => movePeople(1));
prev.addEventListener('click', () => movePeople(-1));


//IF THE SCREEN RESIZES THEN THE CARDS WILL BE MOVED TO THE APPROPRIATE POSITIONS
window.addEventListener('resize', () => {
    //SCREEN GOT SMALLER
    if(screenWidth > window.screen.width){
        screenWidth = window.screen.width;
        smallScreenSlider(1);
    }
    else if(screenWidth < window.screen.width){
        screenWidth = window.screen.width;
        movePeople(-1);
    }
})






