const counterDiv = document.querySelector('#counter');
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
const heartButton = document.querySelector('#heart');
const pauseButton = document.querySelector('#pause');
const likesList = document.querySelector('.likes');

let counterNumber = 0;
let numbersThatHaveLikes = [];

const displayCounter = () => {
  counterDiv.innerHTML = counterNumber;
}

const timer = () => {
  const intervalId = setInterval(() => {
    counterNumber++;
    displayCounter();
  }, 1000);
  return;
}

const isUnique = (array) => {
  const uniqueItemsLiked = [array[0]];
  let currentItem = array[0];

  for(item of array) {
    if(item !== currentItem) {
      uniqueItemsLiked.push(item);
      currentItem = item;
    } else {
      currentItem = item;
    }
  }
}

const displayLikes = () => {
  let html = '';

  const uniqueItems = isUnique(numbersThatHaveLikes);

  for(item of uniqueItems) {
    const howManyLikes = numbersThatHaveLikes.filter((number) => item == number);

    if(howManyLikes.length > 1) {
      html = html + `<li>${item} was liked ${howManyLikes.length} times.`;
    } else {
      html = html + `<li>${item} was liked.`;
    }
  }

  likesList.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
  timer();  
});

plusButton.addEventListener('click', () => {
  counterNumber++;
  displayCounter();
})

minusButton.addEventListener('click', () => {
  counterNumber--;
  displayCounter();
})

heartButton.addEventListener('click', () => {
  numbersThatHaveLikes.push(counterNumber);
  displayLikes();
})