
var animationInterval = 1000;

//Get the stroke width from CSS, convert to an integer
var strokeWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--stroke-width');
strokeWidth = parseInt(strokeWidth.slice(0, -2));

// TAURUS
const taurus = (elem) => {
    hollowOutCircle(elem, strokeWidth);
    var topCircle = splitCellVertical(elem, -170, animationInterval);
    setTimeout(function () {
        maskPartOfCircle(topCircle, "top", 60);
    }, animationInterval);
}

// AQUARIUS
const aquarius = (elem) => {

    var secondTriangle;
    var thirdTriangle;

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        secondTriangle = zplitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
        thirdTriangle = zplitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        emptyOutTriangle(elem);
        emptyOutTriangle(secondTriangle);
        emptyOutTriangle(thirdTriangle);
    }, animationInterval * 2);

    setTimeout(function () {
        splitCellVertical(elem, 0, animationInterval);
        splitCellVertical(secondTriangle, 0, animationInterval);
        splitCellVertical(thirdTriangle, 0, animationInterval);
    }, animationInterval * 3);
}


// SCORPIO
const scorpio = (elem) => {

    var secondCircle;
    var thirdCircle;
    var fourthCircle;
    var triangle = document.getElementById('original-triangle');

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        secondCircle = zplitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
        thirdCircle = zplitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
        fourthCircle = zplitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
        hollowOutCircle(secondCircle, strokeWidth);
        hollowOutCircle(thirdCircle, strokeWidth);
        hollowOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 2);

    setTimeout(function () {
        moveCellVertical(fourthCircle, 50, animationInterval);
    }, animationInterval * 3);

    setTimeout(function () {
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(thirdCircle, 'bottom', 50);
        maskPartOfCircle(elem, 'left', 50);
    }, animationInterval * 3 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 4 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 5 + 100);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        mask.style.width = getWidth(fourthCircle) + 10 + "px";
        mask.style.height = getHeight(fourthCircle) / 2 + "px";
        mask.style.top = getTopDistance(fourthCircle) + "px";
        mask.style.left = getLeftDistance(fourthCircle) + "px";
        mask.style.zIndex = 2;
        elem.parentElement.appendChild(mask);
    }, animationInterval * 5);

    ////////End common elements virgo scorpio

    setTimeout(function () {
        console.log(triangle);
        shrinkElemFour(triangle, animationInterval);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        var style = window.getComputedStyle(triangle, null);
        triangle.style.width = style.width;
        triangle.style.height = style.height;
        triangle.classList.remove('shrink-elem-four');
        //        triangle.style.backgroundColor = 'red';
        triangle.style.zIndex = 1000;
        moveElement(triangle, getLeftDistance(fourthCircle) + getWidth(fourthCircle) - getWidth(triangle) * (3 / 4), getTopDistance(fourthCircle) + getHeight(fourthCircle) / 2 - getHeight(triangle) + 1, animationInterval);
    }, animationInterval * 7 + 100);
}


function virgo(elem) {

    var secondCircle;
    var thirdCircle;
    var fourthCircle;
    var fifthCircle;
    var triangle = document.getElementById('original-triangle');

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        secondCircle = zplitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
        thirdCircle = zplitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
        fourthCircle = zplitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
        hollowOutCircle(secondCircle, strokeWidth);
        hollowOutCircle(thirdCircle, strokeWidth);
        hollowOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 2);

    setTimeout(function () {
        fifthCircle = splitCellVertical(fourthCircle, 15, animationInterval);
        fifthCircle.style.zIndex = 2;
    }, animationInterval * 3);

    setTimeout(function () {
        fourthCircle.style.zIndex = 2000;
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(thirdCircle, 'bottom', 50);
        maskPartOfCircle(elem, 'left', 50);
        
    }, animationInterval * 4 + 100);


    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 5 + 100);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        mask.style.width = getWidth(fifthCircle) + 10 + "px";
        mask.style.height = getHeight(fifthCircle) / 2 + "px";
        mask.style.top = getTopDistance(fifthCircle) + "px";
        mask.style.left = getLeftDistance(fifthCircle) + "px";
        mask.style.zIndex = 2;
        elem.parentElement.appendChild(mask);
        maskPartOfCircle(fifthCircle, 'right', 50);
    }, animationInterval * 6);

    setTimeout(function () {
        fixElement(fifthCircle);
        moveCellVertical(fourthCircle, 22, animationInterval);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        shrinkElementArbitrary(triangle, animationInterval, 50);
    }, animationInterval * 8 + 100);

    setTimeout(function () {
        emptyOutTriangle(triangle);
    }, animationInterval * 9 + 100);

//    setTimeout(function () {
//        var style = window.getComputedStyle(triangle, null);
//        triangle.style.width = style.width;
//        triangle.style.height = style.height;
//        triangle.classList.remove('shrink-elem-arbitrary');
//        triangle.style.zIndex = 1000;
//        triangle.childNodes[0].style.zIndex = -10;
//        console.log(triangle.childNodes[0]);
//        console.log("^");
//        moveElement(triangle, getLeftDistance(fifthCircle) + getWidth(fifthCircle) - getWidth(triangle) * (3 / 4), getTopDistance(fourthCircle) + getHeight(fourthCircle)/2, animationInterval);
//    }, animationInterval * 11 + 100);



}


const libra = (elem) => {

    var originalCircleWidth = getWidth(elem);
    var originalCircleBottom = getBottomDistance(elem);

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
    }, animationInterval);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        mask.style.width = getWidth(elem) / 3 + "px";
        mask.style.height = getHeight(elem) / 3 + "px";
        mask.style.top = getTopDistance(elem) + getHeight(elem) * (2 / 3) + "px";
        mask.style.left = getLeftDistance(elem) + getWidth(elem) / 3 + "px";
        mask.style.zIndex = 2;
        elem.parentElement.appendChild(mask);
    }, animationInterval * 2);

    setTimeout(function () {
        var bar1 = createBar(originalCircleWidth, "horizontal");
        bar1.style.zIndex = 1;
        positionElement(bar1, getBottomDistance(elem) - strokeWidth, getLeftDistance(elem) - getWidth(elem) / 2);
        elem.parentElement.appendChild(bar1);
    }, animationInterval * 3);

    setTimeout(function () {
        var bar1 = createBar(originalCircleWidth, "horizontal");
        positionElement(bar1, originalCircleBottom - strokeWidth * 3, getLeftDistance(elem) - getWidth(elem) / 2);
        elem.parentElement.appendChild(bar1);
    }, animationInterval * 4);

}

// ARIES
const aries = (elem) => {

    var secondCircle;

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        secondCircle = zplitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval)

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
        hollowOutCircle(secondCircle, strokeWidth);
    }, animationInterval * 2);

    setTimeout(function () {
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
    }, animationInterval * 3);

    setTimeout(function () {
        addCircleDescender(elem, 50);
    }, animationInterval * 4);
}

// GEMINI
function gemini(originalCircle) {

    var gapBetweenCircles = 35;

    hollowOutCircle(originalCircle, strokeWidth);
    var topCircle = splitCellVertical(originalCircle, -210);

    setTimeout(function () {
        maskPartOfCircle(topCircle, 'top', 70);
    }, animationInterval);

    setTimeout(function () {
        maskPartOfCircle(originalCircle, 'bottom', 70);
    }, animationInterval);

    setTimeout(function () {
        var bar1 = createBar(gapBetweenCircles * 1.4, "vertical");
        positionElement(bar1, getBottomDistance(topCircle) - 8, getLeftDistance(originalCircle) + getWidth(originalCircle) * 0.3);
        originalCircle.parentElement.appendChild(bar1);

        var bar2 = createBar(gapBetweenCircles * 1.4, "vertical");
        positionElement(bar2, getBottomDistance(topCircle) - 8, getLeftDistance(originalCircle) + getWidth(originalCircle) * 0.6);
        originalCircle.parentElement.appendChild(bar2);
    }, animationInterval * 2);

}


// PISCES
function pisces(elem) {

    var gap = 20;

    var invisibleBox = document.getElementById("box");

    hollowOutCircle(elem, strokeWidth);
    var topCircle = splitCellVertical(elem, -200)

    setTimeout(function () {
        maskPartOfCircle(topCircle, "top", 50);
    }, animationInterval);

    setTimeout(function () {
        maskPartOfCircle(elem, 'bottom', 50);
    }, animationInterval);

    setTimeout(function () {
        var crossBar = createBar(getWidth(elem) + gap, "vertical");
        var leftDistance = getLeftDistance(elem) + getWidth(elem) / 2 - 4;
        var topDistance = getTopDistance(elem) - getWidth(elem) / 2 - gap;
        positionElement(crossBar, topDistance, leftDistance);
        invisibleBox.appendChild(crossBar);
    }, animationInterval * 2);

    setTimeout(function () {
        rotateElem(invisibleBox);
    }, animationInterval * 3);
}

// CANCER
const cancer = (elem) => {

    originalHeight = getHeight(elem);

    shrinkElement(elem, animationInterval);

    var secondCircle;
    var thirdCircle;

    elem.style.zIndex = 100;

    setTimeout(function () {
        secondCircle = splitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        thirdCircle = splitCellHorizontal(secondCircle, strokeWidth * (-1), animationInterval);
    }, animationInterval * 2 + 50);

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
        hollowOutCircle(thirdCircle, strokeWidth);
    }, animationInterval * 3);

    setTimeout(function () {
        secondCircle.style.zIndex = 0;
        growCircle(secondCircle, animationInterval);
    }, animationInterval * 4);


    setTimeout(function () {

        var innerCircle = document.createElement('div');
        innerCircle.classList.add("inner-shape");
        innerCircle.classList.add("circle");
        innerCircle.style.width = "29px";
        innerCircle.style.height = "29px";
        innerCircle.classList.add("grow-shape");
        secondCircle.appendChild(innerCircle);

    }, animationInterval * 5);


    setTimeout(function () {

        //Create mask
        var mask = document.createElement('div');
        mask.setAttribute("class", "mask");
        //                mask.style.backgroundColor = "red";

        mask.style.width = getWidth(thirdCircle) + 5 + "px";
        mask.style.top = getTopDistance(thirdCircle) - strokeWidth + "px";
        mask.style.left = getLeftDistance(thirdCircle) + "px";
        mask.style.height = getHeight(thirdCircle) / 2 + strokeWidth + "px";

        elem.parentElement.appendChild(mask);

        //Create mask
        var mask2 = document.createElement('div');
        mask2.setAttribute("class", "mask");
        //                mask2.style.backgroundColor = "red";

        mask2.style.width = getWidth(elem) + 5 + "px";
        mask2.style.top = getBottomDistance(elem) - getHeight(elem) / 2 + "px";
        mask2.style.left = getLeftDistance(elem) + "px";
        mask2.style.height = getHeight(elem) / 2 + strokeWidth + "px";

        elem.parentElement.appendChild(mask2);


    }, animationInterval * 6);




}



function moveElement(elem, left, top, animationInterval) {

    console.log("the top is " + top);
    console.log("the left is " + left);

    var style = window.getComputedStyle(elem, null);

    //Minus 2*stroke width (8)
    let root = document.documentElement;
    root.style.setProperty('--left-final', left + "px");
    root.style.setProperty('--top-final', top + "px");


    elem.classList.add('move-elem');

    //
    console.log(elem);

    setTimeout(function () {
        elem.style.top = style.top;
        elem.style.left = style.left;
        elem.classList.remove('move-elem');
    }, animationInterval + 100);
}


function growCircle(elem, animationInterval) {

    elem.classList.add('grow-circle');

}

function moveElemHorizontalTwo(elem, distance) {

    var frameInterval = animationInterval / distance;
    var pos = getLeftDistance(elem);
    var end = pos + distance;


    for (var i = 0, len = diff; i <= len; i++) {
        (function (s) {
            setTimeout(function () {
                pos++;

                //Don't go over the end
                if (pos > end) {
                    return;
                }

                elem.style.left = pos + 'px';
            }, time);
        })(i);

        if (pos == end) {
            break;
        }

        time = easeInQuad(i, minTime, maxTime, diff);
        console.log(time);
    }
}

function moveElemVerticalTwo(elem, distance) {

    var frameInterval = animationInterval / distance;
    var pos = getTopDistance(elem);
    var end = pos + distance;


    for (var i = 0, len = diff; i <= len; i++) {
        (function (s) {
            setTimeout(function () {
                pos++;

                //Don't go over the end
                if (pos > end) {
                    return;
                }

                elem.style.top = pos + 'px';
            }, time);
        })(i);

        if (pos == end) {
            break;
        }

        time = easeInQuad(i, minTime, maxTime, diff);
        console.log(time);
    }
}


function rotateElem(elem) {

    elem.classList.add("rotate-ninety");


}

const shrinkElement = (elem, animationInterval) => {

    elem.classList.add('shrink-circle');
    var style = window.getComputedStyle(elem, null);

    setTimeout(function () {
        elem.style.width = style.width;
        elem.style.height = style.height;
        elem.classList.remove('shrink-circle');
    }, animationInterval);
}


function shrinkElementArbitrary(elem, animationInterval, percent) {

    var style = window.getComputedStyle(elem, null);
    var elemWidth = getWidth(elem);
    var newWidth = (percent / 100) * elemWidth;

    //Minus 2*stroke width (8)
    let root = document.documentElement;
    root.style.setProperty('--final-diameter', newWidth + "px");

    elem.classList.add('shrink-elem-arbitrary');

}




const shrinkElemFour = (elem, animationInterval) => {

    elem.classList.add('shrink-elem-four');

    setTimeout(function () {
        var style = window.getComputedStyle(elem, null);
        elem.style.width = style.width;
        elem.style.height = style.height;
        elem.classList.remove('shrink-elem-four');
    }, animationInterval + 10);
}


const addCircleDescender = (elem, length) => {

    var descenderBar = createBar(length, "vertical");
    var verticalPosition = getTopDistance(elem) + (getHeight(elem) / 2);
    var leftPosition = getLeftDistance(elem) + getWidth(elem) - strokeWidth;

    positionElement(descenderBar, verticalPosition, leftPosition);
    descenderBar.classList.add('grow-descender');
    elem.parentElement.appendChild(descenderBar);
    console.log(descenderBar);
}

function emptyOutTriangle(elem) {

    var style = window.getComputedStyle(elem, null);

    //Get style values of the element (minus 'px');
    var elemWidth = getWidth(elem);
    var elemHeight = getHeight(elem);

    //Minus 2*stroke width (8)
    var baseStrokeWidth = getTriangleBaseStrokeWidth(strokeWidth);
    let root = document.documentElement;
    root.style.setProperty('--inner-circle-width', elemWidth - 2 * baseStrokeWidth + "px");
    root.style.setProperty('--inner-circle-height', elemWidth - 2 * baseStrokeWidth + "px");

    //Create new circle, add to parent
    var innerCircle = document.createElement('div');
    innerCircle.setAttribute("class", "inner-triangle");
    elem.appendChild(innerCircle);
}

// "Hollow out" a circle
// i.e. create an inner circle with background colour
function hollowOutCircle(elem, strokeWidth) {

    var elemWidth = getWidth(elem);
    var innerCircle = document.createElement('div');
    setDiameter(innerCircle, elemWidth - 2 * strokeWidth);

    innerCircle.classList.add("inner-shape");
    innerCircle.classList.add("circle");
    innerCircle.classList.add("grow-shape");

    elem.appendChild(innerCircle);
}


function maskPartOfCircle(element, side, percentToMask) {

    //Get dimensions and placement of object to mask
    var elemWidth = getWidth(element);
    var elemHeight = getHeight(element);
    var elemLeftValue = getLeftDistance(element);
    var elemTopValue = getTopDistance(element);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    //Mask either top or bottom 
    switch (side) {
        case ("top"):
            mask.style.width = elemWidth + "px";
            mask.style.top = elemTopValue + "px";
            mask.style.left = elemLeftValue + "px";
            mask.style.height = elemHeight * (percentToMask / 100) + "px";
            break;
        case ("bottom"):
            mask.style.width = elemWidth + "px";
            mask.style.top = elemTopValue + (elemHeight * ((100 - percentToMask) / 100)) + "px";
            mask.style.left = elemLeftValue + "px";
            mask.style.height = elemHeight * (percentToMask / 100) + "px";
            break;
        case ("left"):
            mask.style.width = elemWidth * (percentToMask / 100) + "px";
            mask.style.top = elemTopValue + "px";
            mask.style.left = elemLeftValue + "px";
            mask.style.height = elemHeight + "px";
            break;
        case ("right"):
            mask.style.width = elemWidth * (percentToMask / 100) + "px";
            mask.style.top = elemTopValue + "px";
            mask.style.left = elemLeftValue + elemWidth * (percentToMask / 100) + "px";
            mask.style.height = elemHeight + 5 + "px";
            break;

        default:
            console.log("Please enter top, bottom, left or right. You entered: " + side);

    }

    element.parentElement.appendChild(mask);
}


function createBar(size, orientation) {

    var crossBar = document.createElement("div");
    crossBar.classList.add('bar');

    if (orientation == "vertical") {
        crossBar.style.height = size + "px";
    } else if (orientation == "horizontal") {
        console.log("hi there");
        crossBar.style.width = size + "px";
    } else {
        console.log("Please enter vertical or horizontal");
    }
    console.log("width: " + getWidth(crossBar));
    return crossBar;
}

const splitCellHorizontal = (elem, gap, animationInterval) => {

    var style = window.getComputedStyle(elem, null);
    var dupNode = copyNode(elem);

    let root = document.documentElement;
    root.style.setProperty('--left-initial', style.left);
    root.style.setProperty('--left-final', getLeftDistance(elem) + getWidth(elem) + gap + "px");

    dupNode.classList.add("slide-horizontal");
    document.getElementById('box').appendChild(dupNode);

    setTimeout(function () {
        fixElement(dupNode);
    }, animationInterval);


    return dupNode;
}


const zplitCellHorizontal = (elem, gap, animationInterval) => {

    var style = window.getComputedStyle(elem, null);
    var dupNode = copyNode(elem);

    let root = document.documentElement;
    root.style.setProperty('--left-initial', style.left);

    dupNode.classList.add('move-left');
    dupNode.style.left = getLeftDistance(elem) + getWidth(elem) + gap + "px";

    document.getElementById('box').appendChild(dupNode);

    setTimeout(function () {
        fixElement(dupNode);
    }, animationInterval + 200);

    return dupNode;
}


const splitCellVertical = (elem, gap, animationInterval) => {

    elem.classList.remove('move-left');

    var dupNode = copyNode(elem);

    var style = window.getComputedStyle(elem, null);


    let root = document.documentElement;
    root.style.setProperty('--top-initial', style.top);

    dupNode.classList.add('move-down');
    dupNode.style.top = getTopDistance(elem) + getHeight(elem) + gap + "px";

    document.getElementById('box').appendChild(dupNode);

    return dupNode;
}


const moveCellVertical = (elem, gap, animationInterval) => {

    elem.classList.remove('move-left');
    var style = window.getComputedStyle(elem, null);

    let root = document.documentElement;
    root.style.setProperty('--top-initial', style.top);

    elem.classList.add('move-down');
    elem.style.top = getTopDistance(elem) + gap + "px";
}


//Helper functions

function copyNode(elem) {
    return elem.cloneNode(true);
}

function positionElement(element, top, left) {
    element.style.top = top + "px";
    element.style.left = left + "px";
}

// Set diameter of shape 
function setDiameter(elem, diameter) {

    elem.style.height = diameter + "px";
    elem.style.width = diameter + "px";

}

// Return pixel width of element as an integer, removing "px"
function getWidth(elem) {
    var style = window.getComputedStyle(elem, null);
    return parseInt(style.width.slice(0, -2));
}

// Return pixel height of element as an integer, removing "px"
function getHeight(elem) {
    var style = window.getComputedStyle(elem, null);
    return parseInt(style.height.slice(0, -2));
}

// Return left value of element as an integer, removing "px"
function getLeftDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    return parseInt(style.left.slice(0, -2));
}

// Return top Value of element as an integer, removing "px"
function getTopDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    return parseInt(style.top.slice(0, -2));
}

function getBottomDistance(elem) {
    return getTopDistance(elem) + getHeight(elem);
}

//Given the stroke width, get the horizontal strokewidth at base of triangle (pythagoras) 
function getTriangleBaseStrokeWidth(strokeWidth) {
    return Math.sqrt(Math.pow(strokeWidth, 2) + Math.pow((1 / 2) * strokeWidth, 2));
}

// Remove slide and resize classes
// Give the element these properties permanently
function fixElement(elem) {
    var style = window.getComputedStyle(elem, null);
    elem.style.top = style.top;
    elem.style.left = style.left;
    elem.style.width = style.width;
    elem.style.height = style.height;
    elem.classList.remove('slide-vertical');
    elem.classList.remove('slide-horizontal');
    elem.classList.remove('move-elem');
}
