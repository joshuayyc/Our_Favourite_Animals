document.querySelector('button').addEventListener('click', surpriseButton);
document.getElementById('arrowLeft').addEventListener('click', leftButton);
document.getElementById('arrowRight').addEventListener('click', rightButton);

let animal = 'cat';


//Add Functions
function surpriseButton (e) {
    e.preventDefault();
    console.log ("Surprise Clicked");
    var animalList = ['cat','dog','racoon'];
    var randomNumber = Math.floor(Math.random()*animalList.length);
    var animal = animalList[randomNumber];
    chooseAnimal(animal);
    console.log(animal);
}

function leftButton (e) {
    e.preventDefault();
    console.log ("left button Clicked");
    if (document.getElementById('animal').innerText  == "Cat"){
      changeRacoon();
    }
    else if (document.getElementById('animal').innerText == "Racoon") {
       changeDog();
    }
    else if (document.getElementById('animal').innerText == "Dog") {
       changeCat();
    }


}

function rightButton (e) {
    e.preventDefault();
    console.log ("right button Clicked");
    if (document.getElementById('animal').innerText  == "Cat"){
      changeDog();
    }
    else if (document.getElementById('animal').innerText == "Racoon") {
       changeCat();
    }
    else if (document.getElementById('animal').innerText == "Dog") {
       changeRacoon();
    }
}

function chooseAnimal (animal) {
    if (animal == 'cat') {
        changeCat();
    }

     if (animal == 'racoon') {
        changeRacoon();
      }
     if (animal == 'dog') {
        changeDog();
      }
}


//Add Helper Functions
function changeCat () {
    document.getElementById('image').src = "cat.jpg";
    document.getElementById('name').innerHTML = "Meow";
    document.getElementById('animal').innerHTML = "Cat";
    document.getElementById('text').innerHTML = "I am a nice little cat. I love to play with strings of balls and sleep all day long.";
}

function changeDog () {
    document.getElementById('image').src = "dog.jpg";
    document.getElementById('name').innerHTML = "Story";
    document.getElementById('animal').innerHTML = "Dog";
    document.getElementById('text').innerHTML = "My name is story the labradoodle. I love to play fetch and run around outside!";
}

function changeRacoon () {
    document.getElementById('image').src = "racoon.jpg";
    document.getElementById('name').innerHTML = "Shady";
    document.getElementById('animal').innerHTML = "Racoon";
    document.getElementById('text').innerHTML = "I am a nice little racoon. I sleep during the day and come out at night to scavenge for goodies!";

}
