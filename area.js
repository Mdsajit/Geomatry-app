function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);
    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area);
    //show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry("Triangle", area);
}


function claculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get reactangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }
    const area = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    addToCalculationEntry('Rectangle', area);
}


//reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText("parallelogram-area", area);
    
    //add to calculation entry
    addToCalculationEntry("Parallelogram", area);
    
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area", areaTwoDecimal);
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
//reusable set span div or test
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


//add to calculation entry
//get the element where you want to add the dynamic html
//create an element you want to add
// if needed and some class
// set inner html it could be dynamic
// appenf the created element as a child of the parent
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =  `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-primary">Convert</button>`;
    calculationEntry.appendChild(p);
}