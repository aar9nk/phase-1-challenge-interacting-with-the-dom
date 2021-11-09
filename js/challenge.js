const counterText = document.querySelector('#counter');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const heartButton = document.querySelector('#heart');
const likesList = document.querySelector('#likes');


let counter = 0;
let itemsLiked = [];


const displayCounter = () => {
  counterText.innerHTML = counter;
}

const setTimer = () => {
  const interval = setInterval(() => {
    counter++;
    displayCounter();
  }, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimer();
});

plusButton.addEventListener('click', () => {
  counter++;
  displayCounter();
});

minusButton.addEventListener('click', () => {
  counter--;
  displayCounter();
});


const createHtml = (item, numberOfLikes) => {
  return `<li>${item} was liked ${numberOfLikes} times</li>`;
}

const findUnique = () => {
  let uniqueItemsLiked = [];

  let compareCurrentNumber = itemsLiked[0];

  for(item of itemsLiked) {
    if(item !== compareCurrentNumber) {
      uniqueItemsLiked.push(item);
      compareCurrentNumber = itemsLiked[item];
    } else {
      compareCurrentNumber = itemsLiked[item];
    }
  }

  return uniqueItemsLiked;
}

const numberOfLikes = (item) => {
  const newArray = itemsLiked.filter(number => number === item);

  return newArray.length;
}

const renderLikesList = () => {
  let htmlString = '';
  const uniqueNumbersArray = findUnique();

  for(item of uniqueNumbersArray) {
    const timesLiked = numberOfLikes(itemsLiked);
    htmlString = htmlString + createHtml(item, timesLiked);
  }

  likesList.innerHTML = htmlString;
}

heartButton.addEventListener('click', () => {
  itemsLiked.push(counter);
  renderLikesList();
  // display how many times a number was liked 
})