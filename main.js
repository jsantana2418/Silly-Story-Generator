document.querySelector('html').style.backgroundColor = 'salmon';
//part 1
//variable declaration
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//part 2
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. " +
"When they got to :inserty:, they stared in horror for a few moments, " +
"then :insertz:. Bob saw the whole thing, but he was not surprised " +
" — :insertx: weighs 300 pounds, and it was a hot day."
//array - insertX
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//array - insertY
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
//array - insertZ
var insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

//click event listener
randomize.addEventListener('click', result);

function result() {
  //JS - function scope declaration
  var newStory = storyText; //storing storyText value into newStory
  var xItem = randomValueFromArray(insertX); //storing random index value
  var yItem = randomValueFromArray(insertZ); //storing random index value
  var zItem = randomValueFromArray(insertZ); //storing random index value

  newStory = newStory.replace(':insertx:', xItem); //replace then store new val
  newStory = newStory.replace(':insertx:', xItem); //replace then store new val
  newStory = newStory.replace(':inserty:', yItem); //replace then store new val
  newStory = newStory.replace(':insertz:', zItem); //replace then store new val

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name); //replace then store new val
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round((300/14)) + " stone"; //lbs / 14
    var temperature =  Math.round(((94-32)*(5/9))) + " centigrade";
    //(°F  -  32)  x  5/9 = °C
    newStory = newStory.replace('300 pounds', weight); //replace then store new val
    newStory = newStory.replace('94 farenheit', temperature); //replace then store new val
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
