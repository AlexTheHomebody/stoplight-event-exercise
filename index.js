//## Part 1//
var stopButton = document.querySelector("#stopButton");
var slowButton = document.querySelector("#slowButton");
var goButton = document.querySelector("#goButton");
var stopColor = document.querySelector("#stopLight");
var slowColor = document.querySelector("#slowLight");
var goColor = document.querySelector("#goLight");



stopButton.addEventListener('click', function () {
  if (stopColor.classList.contains('stop')) {
    stopColor.classList.remove('stop');
  } else {
    stopColor.classList.add('stop');
  }
});

slowButton.addEventListener('click', function () {
  if (slowColor.classList.contains('slow')) {
      slowColor.classList.remove('slow');
  } else {
    slowColor.classList.add('slow');
  }
});

goButton.addEventListener('click', function () {
  if (goColor.classList.contains('go')) {
    goColor.classList.remove('go');
  } else {
    goColor.classList.add('go');
  }
});

//## Part 2//

stopButton.addEventListener('mouseenter', function(){
  console.log('Entered ' + stopButton.textContent + ' botton');
});

slowButton.addEventListener('mouseenter', function(){
  console.log('Entered ' + slowButton.textContent + ' botton');
});

goButton.addEventListener('mouseenter', function(){
  console.log('Entered ' + goButton.textContent + ' botton');
});

stopButton.addEventListener('mouseout', function(){
  console.log('Left ' + stopButton.textContent + ' botton');
});

slowButton.addEventListener('mouseout', function(){
  console.log('Left ' + slowButton.textContent + ' botton');
});

goButton.addEventListener('mouseout', function(){
  console.log('Left ' + goButton.textContent + ' botton');
});






