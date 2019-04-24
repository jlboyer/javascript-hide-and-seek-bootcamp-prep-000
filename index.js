function getFirstSelector(selector){
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget(){
  var element = document.querySelector('#nested .target');
  return element;
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML + n);
  }
}



function deepestChild(){
  let nodeList = document.querySelectorAll('div');
  let nodeArray = [...nodeList]; 
  let currentNode = nodeArray[0];
  let deepestNode = currentNode;
  let depth = -1;
  let maxDepth = 0;
  while (currentNode !== undefined) {
    console.log(currentNode)
    if (currentNode.children.length > 0) {
      depth++
    } else if (currentNode.children.length === 0 && depth >= maxDepth) {
      maxDepth = depth;
      deepestNode = currentNode;
      depth = 0;
    }
    currentNode = nodeArray.shift();
  }
  console.log("Maximum Depth: "+maxDepth)
  return deepestNode;
}


  
 /*
 //cheap answer
 function deepestChild(){
  var deepest = document.querySelectorAll('#grand-node div')
  return deepest[deepest.length - 1]
 }
 */
 
 /*
 //another variant, note children only works with node lists, this also doesn't compare different trees
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
  }
  return nodeList[]
}
*/



