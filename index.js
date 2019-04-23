function getFirstSelector(selector){
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget(){
  var element = document.querySelector('#nested .target');
  return element;
}

function increaseRankBy(n){
  n = parseInt(n);
  const lis = document.querySelectorAll('ul.ranked-list');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

/*
function deepestChild(){
  var nodesList = document.querySelectorAll('div');
  //convert nodesList into an Array
  var current = [];
  var past = [];
  for (var i = nodesList.length >>> 0; i--;){
    current[i] = nodesList[i];
  }
    // define next array to push possible array elements onto while marching through current array
  let next = [];
  //define initial depth of 0, update with increasing depth and return max
  let depth = 0;
  //run while loop until reaching end of node path across breadth of Array
  while (current !== undefined || current === 0) {
  //  console.log(current)
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
        if (i > depth) {
          depth = i;
          past = current[i];
        }
      }
    }
    //after pushing any children onto next, make first element current and repeat
    current = next.shift();
  }
  return past;
} */

function deepestChild(){
  var deepest = document.querySelectorAll('#grand-node div')
  return deepest[deepest.length-1]
 }

