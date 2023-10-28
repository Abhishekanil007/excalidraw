function clearPage(){
    //get content section by id
    let contentSection1 = document.getElementById('content-1');
    //clear content section
    contentSection1.innerHTML = '';

    //get content section by id
    let contentSection2 = document.getElementById('content-2');
    // clear content section
    contentSection2.innerHTML = '';

    //get content section by id
    let contentSection3 = document.getElementById('content-3');
    //clear content section
    contentSection3.innerHTML = '';

    //get content section by id
    let contentSection4 = document.getElementById('content-4');
    //clear content section
    contentSection4.innerHTML = '';

    //get content section by id
    let contentSection5 = document.getElementById('content-5');
    //clear content section
    contentSection5.innerHTML = '';

    //get content section by id
    let contentSection6 = document.getElementById('content-6');
    //clear content section
    contentSection6.innerHTML = '';

    // create a new canvas
    let canvas = document.createElement('canvas');
    canvas.width = 1500;
    canvas.height = 500;
    
    // add canvas to content section
    contentSection1.appendChild(canvas);

    // get 2D context  of the canvas for drawing
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    // free hand drawing functions

    let isDrawing = false;
    let x = 0;
    let y = 0;

    canvas.addEventListener('mousedown', (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    })

    canvas.addEventListener('mousemove', (e) => {
        if(!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    })

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    
}

function rectangle()
{
    
     //get content section by id
     let contentSection1 = document.getElementById('content-1');
     //clear content section
     contentSection1.innerHTML = '';
 
     //get content section by id
     let contentSection2 = document.getElementById('content-2');
     // clear content section
     contentSection2.innerHTML = '';
 
     //get content section by id
     let contentSection3 = document.getElementById('content-3');
     //clear content section
     contentSection3.innerHTML = '';
 
     //get content section by id
     let contentSection4 = document.getElementById('content-4');
     //clear content section
     contentSection4.innerHTML = '';
 
     //get content section by id
     let contentSection5 = document.getElementById('content-5');
     //clear content section
     contentSection5.innerHTML = '';
 
     //get content section by id
     let contentSection6 = document.getElementById('content-6');
     //clear content section
     contentSection6.innerHTML = '';
 
     // create a new canvas
     let canvas = document.createElement('canvas');
     canvas.width = 1500;
     canvas.height = 500;
     
     // add canvas to content section
     contentSection1.appendChild(canvas);

 
     // get 2D context  of the canvas for drawing
     let ctx = canvas.getContext('2d');
     ctx.lineWidth = 5;
     ctx.lineCap = 'round';
     ctx.strokeStyle = 'black';

     var isDrawing = false;
    
     var startX, startY, endX, endY;

    var rectangles = [];

     canvas.addEventListener("mousedown" , function(event)
     {
        isDrawing = true;
        startX = event.clientX - canvas.getBoundingClientRect().left;
        startY = event.clientY - canvas.getBoundingClientRect().top;
     });

     canvas.addEventListener("mousemove", function(event)
     {
        if(isDrawing)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawAllRectangles(rectangles);

            endX = event.clientX - canvas.getBoundingClientRect().left;
            endY = event.clientY - canvas.getBoundingClientRect().top; 
            drawRectangle(startX, startY, endX - startX, endY - startY);
        }
     });

     canvas.addEventListener("mouseup", function()
     {
        isDrawing = false;

        rectangles.push({ x: startX, y: startY, width: endX - startX, height: endY - startY });
     });


     function drawRectangle(x, y, width, height)
     {
        ctx.strokeStyle = "black"; // Set stroke color
        ctx.lineWidth = 2; // Set stroke width
        ctx.strokeRect(x,y, width, height);
        
     }

     function drawAllRectangles(rectangles)
     {
        rectangles.forEach(function (rect)
        {
            drawRectangle(rect.x, rect.y, rect.width, rect.height);
        });
     }


}

function circle()
{
     //get content section by id
     let contentSection1 = document.getElementById('content-1');
     //clear content section
     contentSection1.innerHTML = '';
 
     //get content section by id
     let contentSection2 = document.getElementById('content-2');
     // clear content section
     contentSection2.innerHTML = '';
 
     //get content section by id
     let contentSection3 = document.getElementById('content-3');
     //clear content section
     contentSection3.innerHTML = '';
 
     //get content section by id
     let contentSection4 = document.getElementById('content-4');
     //clear content section
     contentSection4.innerHTML = '';
 
     //get content section by id
     let contentSection5 = document.getElementById('content-5');
     //clear content section
     contentSection5.innerHTML = '';
 
     //get content section by id
     let contentSection6 = document.getElementById('content-6');
     //clear content section
     contentSection6.innerHTML = '';
 
     // create a new canvas
     let canvas = document.createElement('canvas');
     canvas.width = 1500;
     canvas.height = 500;
     
     // add canvas to content section
     contentSection1.appendChild(canvas);

 
     // get 2D context  of the canvas for drawing
     let ctx = canvas.getContext('2d');
     ctx.lineWidth = 5;
     ctx.lineCap = 'round';
     ctx.strokeStyle = 'black';


     let isDrawing = false;
     let startX, startY, endX, endY;
     let circles = [];

     canvas.addEventListener("mousedown", function(event)
     {
        isDrawing = true;
        startX = event.clientX - canvas.getBoundingClientRect().left;
        startY = event.clientY - canvas.getBoundingClientRect().top;

     });

     canvas.addEventListener("mousemove" , function(event){
        if(isDrawing)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAllCircles(ctx, circles);

            endX = event.clientX - canvas.getBoundingClientRect().left;
            endY = event.clientY - canvas.getBoundingClientRect().top;
            let radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            drawCircleOutline(ctx, startX, startY, radius);
        }
     });

     canvas.addEventListener("mouseup", function() {
        if (isDrawing) {
            isDrawing = false;
            let radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            circles.push({ x: startX, y: startY, radius: radius });
        }
    });

    function drawCircleOutline(ctx, x, y, radius) {
        ctx.strokeStyle = "black"; // Set circle stroke color
        ctx.lineWidth = 2; // Set circle stroke width
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function drawAllCircles(ctx, circles) {
        circles.forEach(function(circle){
            drawCircleOutline(ctx, circle.x, circle.y, circle.radius);
        });
    }

}

function diamond()
{
     //get content section by id
     let contentSection1 = document.getElementById('content-1');
     //clear content section
     contentSection1.innerHTML = '';
 
     //get content section by id
     let contentSection2 = document.getElementById('content-2');
     // clear content section
     contentSection2.innerHTML = '';
 
     //get content section by id
     let contentSection3 = document.getElementById('content-3');
     //clear content section
     contentSection3.innerHTML = '';
 
     //get content section by id
     let contentSection4 = document.getElementById('content-4');
     //clear content section
     contentSection4.innerHTML = '';
 
     //get content section by id
     let contentSection5 = document.getElementById('content-5');
     //clear content section
     contentSection5.innerHTML = '';
 
     //get content section by id
     let contentSection6 = document.getElementById('content-6');
     //clear content section
     contentSection6.innerHTML = '';
 
     // create a new canvas
     let canvas = document.createElement('canvas');
     canvas.width = 1500;
     canvas.height = 500;
     
     // add canvas to content section
     contentSection1.appendChild(canvas);

 
     // get 2D context  of the canvas for drawing
     let ctx = canvas.getContext('2d');
     ctx.lineWidth = 3;
     ctx.lineCap = 'round';
     ctx.strokeStyle = 'black';

     let isDrawing = false;
    let startX, startY, endX, endY;
    let diamonds = [];

    canvas.addEventListener("mousedown", function(event) {
        isDrawing = true;
        startX = event.clientX - canvas.getBoundingClientRect().left;
        startY = event.clientY - canvas.getBoundingClientRect().top;
        endX = startX;
        endY = startY;
    });

    canvas.addEventListener("mousemove", function(event) {
        if (isDrawing) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAllDiamonds(ctx, diamonds);
            endX = event.clientX - canvas.getBoundingClientRect().left;
            endY = event.clientY - canvas.getBoundingClientRect().top;
            drawDiamondOutline(ctx, startX, startY, endX, endY);
        }
    });

    canvas.addEventListener("mouseup", function() {
        if (isDrawing) {
            isDrawing = false;
            let width = Math.abs(endX - startX);
            let height = Math.abs(endY - startY);
            diamonds.push({ x: Math.min(startX, endX), y: Math.min(startY, endY), width: width, height: height });
        }
    });

    function drawDiamondOutline(ctx, x, y, endX, endY) {
        let width = Math.abs(endX - x);
        let height = Math.abs(endY - y);
        ctx.beginPath();
        ctx.moveTo(x + width / 2, y); // Top point
        ctx.lineTo(x + width, y + height / 2); // Right point
        ctx.lineTo(x + width / 2, y + height); // Bottom point
        ctx.lineTo(x, y + height / 2); // Left point
        ctx.closePath();
        ctx.stroke();
    }

    function drawAllDiamonds(ctx, diamonds) {
        diamonds.forEach(function(diamond) {
            drawDiamondOutline(ctx, diamond.x, diamond.y, diamond.x + diamond.width, diamond.y + diamond.height);
        });
    }
}

const history = [];
let historyIndex = -1;

// When you draw a shape, add it to the history
history.push({
  type: 'draw',
  shape: {
    type: 'rectangle',
    x: 50,
    y: 50,
    width: 100,
    height: 100
  }
});
historyIndex++;

function undo() {
   
    if (historyIndex >= 0) {
      const action = history[historyIndex];
      if (action.type === 'draw') {
        shapes.pop();
      }
      historyIndex--;
    }
  }
  
  function redo() {
    
    if (historyIndex < history.length - 1) {
      const action = history[historyIndex + 1];
      if (action.type === 'draw') {
        shapes.push(action.shape);
      }
      historyIndex++;
    }
  }

  const shapes = [];

// When you draw a shape, add it to the list
shapes.push({
  type: 'rectangle',
  x: 50,
  y: 50,
  width: 100,
  height: 100
});


canvas.addEventListener('mousedown', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
  
    // Check if the click is inside any of the shapes
    for (let shape of shapes) {
      if (x >= shape.x && x <= shape.x + shape.width &&
          y >= shape.y && y <= shape.y + shape.height) {
        console.log('Shape selected!');
        break;
      }
    }
  });
  