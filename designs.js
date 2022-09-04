// Select color input
const color = document.getElementById('colorPicker')
const pixelCanvas = document.getElementById('pixelCanvas');

// Select size input
const size = document.getElementById('sizePicker');
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');

let draw = false

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    e.preventDefault();
  
    const height = inputHeight.value;
    const width = inputWidth.value;
    // nested loop
    for (let i = 1; i <= height; i++) {
      // create row element
      const row = document.createElement('tr');
      for (let j = 1; j <= width; j++) {
        // create column element
        const column = document.createElement('td');
        column.id = 'column-i-j';
        // append column to row element
        row.appendChild(column);  
      }
      // append row element to table
      pixelCanvas.appendChild(row);
      
      
    }
}
  
  //Add mouse events
  pixelCanvas.addEventListener('mouseover', function (e) {
    if (!draw) return
    e.target.style.backgroundColor = color.value;
  })

  pixelCanvas.addEventListener('mousedown', function (e) {
    e.target.style.backgroundColor = color.value;
  })
  // if mouse is down (user clicks and drags) all the boxes in the path are colored 
  window.addEventListener('mousedown', function(){
    draw = true
  })
  // if mouse is up draw is false agin
  window.addEventListener('mouseup', function(){
    draw = false
  })

  // Grid clears if there are already colored squares when the submit button is clicked
  function reset() {
    pixelCanvas.innerHTML = ''
    makeGrid(e)
}

  btn.addEventListener('click', reset);


  // call makeGrid() function when user chooses size
  sizePicker.addEventListener('submit', makeGrid);
  
