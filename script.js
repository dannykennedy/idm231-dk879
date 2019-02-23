//const init = () => {
//    console.log("window loaded");
//}
//
//
//window.addEventListener('load', init);

//if (document.readyState === 'complete') {


var time = 0;
var diff = 30;

var minTime = 0;
var maxTime = 1000;



//
//Get the animation interval from CSS, convert to an integer in milliseconds
var animationInterval = 1000;

//Get the stroke width from CSS, convert to an integer
var strokeWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--stroke-width');
strokeWidth = parseInt(strokeWidth.slice(0, -2));

// TAURUS
const taurus = (elem) => {
    emptyOutCircle(elem, strokeWidth);
    var topCircle = divideCellVertical(elem, strokeWidth * (-1));
    setTimeout(function () {
        maskPartOfCircle(topCircle, "top", 60);
    }, animationInterval);
}

//TEST
const test = (elem) => {

    shrinkCircle(elem, animationInterval);

}

// AQUARIUS
const aquarius = (elem) => {

    var secondTriangle;
    var thirdTriangle;

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        secondTriangle = splitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        thirdTriangle = splitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
    }, animationInterval * 2 + 10);

    setTimeout(function () {
        emptyOutTriangle(elem);
        emptyOutTriangle(secondTriangle);
        emptyOutTriangle(thirdTriangle);
    }, animationInterval * 3);

    setTimeout(function () {
        splitCellVertical(elem, 0, animationInterval);
    }, animationInterval * 4);

    setTimeout(function () {
        splitCellVertical(secondTriangle, 0, animationInterval);
    }, animationInterval * 5);

    setTimeout(function () {
        splitCellVertical(thirdTriangle, 0, animationInterval);
    }, animationInterval * 6);

}


// SCORPIO TWO
const scorpioTwo = (elem) => {

    var secondCircle;
    var thirdCircle;
    var fourthCircle;
    var triangle = document.getElementById('original-triangle');

    //////// Common elements virgo scorpio

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        secondCircle = splitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        thirdCircle = splitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
    }, animationInterval * 2 + 10);

    setTimeout(function () {
        fourthCircle = splitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval * 3 + 20);

    setTimeout(function () {
        emptyOutCircle(elem, strokeWidth);
        emptyOutCircle(secondCircle, strokeWidth);
        emptyOutCircle(thirdCircle, strokeWidth);
        emptyOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 4);

    setTimeout(function () {
        moveCellVertical(fourthCircle, 15, animationInterval);
    }, animationInterval * 5);

    setTimeout(function () {
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(thirdCircle, 'bottom', 50);
        maskPartOfCircle(elem, 'left', 50);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 7 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 7 + 100);

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
    }, animationInterval * 8);

    ////////End common elements virgo scorpio

    setTimeout(function () {
        console.log(triangle);
        shrinkElemFour(triangle, animationInterval);
    }, animationInterval * 9 + 100);

    setTimeout(function () {
        var style = window.getComputedStyle(triangle, null);
        triangle.style.width = style.width;
        triangle.style.height = style.height;
        triangle.classList.remove('shrink-elem-four');
        //        triangle.style.backgroundColor = 'red';
        triangle.style.zIndex = 1000;
        moveElement(triangle, getLeftDistance(fourthCircle) + getWidth(fourthCircle) - getWidth(triangle) * (3 / 4), getTopDistance(fourthCircle) + getHeight(fourthCircle) / 2 - getHeight(triangle) + 1, animationInterval);
    }, animationInterval * 10 + 100);
}


function virgo(elem) {

    var secondCircle;
    var thirdCircle;
    var fourthCircle;
    var fifthCircle;
    var triangle = document.getElementById('original-triangle');

    //////// Common elements virgo scorpio

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        secondCircle = splitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        thirdCircle = splitCellHorizontal(elem, getWidth(elem) + strokeWidth * (-2), animationInterval);
    }, animationInterval * 2 + 10);

    setTimeout(function () {
        fourthCircle = splitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval * 3 + 20);

    setTimeout(function () {
        emptyOutCircle(elem, strokeWidth);
        emptyOutCircle(secondCircle, strokeWidth);
        emptyOutCircle(thirdCircle, strokeWidth);
        emptyOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 4);

    setTimeout(function () {
        fifthCircle = splitCellVertical(fourthCircle, 15, animationInterval);
    }, animationInterval * 5);

    setTimeout(function () {
        fourthCircle.style.zIndex = 2000;
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(thirdCircle, 'bottom', 50);
        maskPartOfCircle(elem, 'left', 50);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 7 + 100);

    setTimeout(function () {
        addCircleDescender(elem, 50);
        addCircleDescender(secondCircle, 50);
        addCircleDescender(thirdCircle, 50);
    }, animationInterval * 7 + 100);

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
    }, animationInterval * 8);

    setTimeout(function () {
        fixElement(fifthCircle);
        moveCellVertical(fourthCircle, 22, animationInterval);
    }, animationInterval * 9 + 100);

}

// Remove slide and resize classes
// Give the element these properties permanently
function fixElement(elem){
    var style = window.getComputedStyle(elem, null);
    elem.style.top = style.top;
    elem.style.left = style.left;
    elem.style.width = style.width;
    elem.style.height = style.height;
    elem.classList.remove('slide-vertical');
    elem.classList.remove('slide-horizontal');
    elem.classList.remove('move-elem');
}



const libra = (elem) => {

    var originalCircleWidth = getWidth(elem);
    var originalCircleBottom = getBottomDistance(elem);

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        emptyOutCircle(elem, strokeWidth);
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

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        secondCircle = splitCellHorizontal(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval)

    setTimeout(function () {
        emptyOutCircle(elem, strokeWidth);
        emptyOutCircle(secondCircle, strokeWidth);
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

    emptyOutCircle(originalCircle, strokeWidth);
    var topCircle = divideCellVertical(originalCircle, gapBetweenCircles);

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

    emptyOutCircle(elem, strokeWidth);
    var topCircle = divideCellVertical(elem, gap)

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
    //            emptyOutCircle(elem, strokeWidth);

    originalHeight = getHeight(elem);

    shrinkCircle(elem, animationInterval);

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
        emptyOutCircle(elem, strokeWidth);
        emptyOutCircle(thirdCircle, strokeWidth);
    }, animationInterval * 3);

    setTimeout(function () {
        secondCircle.style.zIndex = 0;
        growCircle(secondCircle, animationInterval);
    }, animationInterval * 4);


    setTimeout(function () {
        var innerCircle = document.createElement('div');
        innerCircle.classList.add("inner-circle");
        innerCircle.style.width = "29px";
        innerCircle.style.height = "29px";
        innerCircle.classList.add("grow");
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

    setTimeout(function () {
            elem.classList.add('move-elem');
        }, 50)
        //
    console.log(elem);

    setTimeout(function () {
        elem.style.top = style.top;
        elem.style.left = style.left;
        elem.classList.remove('move-elem');
    }, animationInterval + 100);
}


function emptyOutCirclePrimary(elem) {
    var innerCircle = document.createElement('div');
    innerCircle.classList.add("inner-circle");
    innerCircle.classList.add("inner-circle-custom");
    innerCircle.style.zIndex = 100;
    innerCircle.style.color = "red";
    console.log(innerCircle);
    elem.appendChild(innerCircle);
    return innerCircle;
}

function growCircle(elem, animationInterval) {

    elem.classList.add('grow-circle');

    setTimeout(function () {
        var style = window.getComputedStyle(elem, null);
        elem.style.width = style.width;
        elem.style.height = style.height;
        //                elem.classList.remove('grow-circle');
    }, animationInterval + 50);

}






// SCORPIO
const scorpio = (elem) => {

    var secondCircle;
    var thirdCircle;
    var fourthCircle;

    originalHeight = getHeight(elem);

    elem.style.left = getLeftDistance(elem);

    shrinkCircle(elem, animationInterval);

    setTimeout(function () {
        secondCircle = cellSplit(elem, 27)
    }, animationInterval);

    setTimeout(function () {
        thirdCircle = cellSplit(secondCircle, 27);
    }, animationInterval * 2 + 100);

    setTimeout(function () {
        fourthCircle = cellSplit(thirdCircle, 27);
    }, animationInterval * 3 + 100);


    setTimeout(function () {
        emptyOutCircle(elem, strokeWidth);
        emptyOutCircle(secondCircle, strokeWidth);
        emptyOutCircle(thirdCircle, strokeWidth);
        emptyOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 4 + 100);

    setTimeout(function () {
        moveElemVerticalTwo(fourthCircle, 70);
    }, animationInterval * 5 + 100);

    setTimeout(function () {
        maskPartOfCircle(elem, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(thirdCircle, 'bottom', 50);
        maskPartOfCircle(elem, 'left', 50);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        addCircleDescender(elem, originalHeight - getHeight(elem) / 2 - strokeWidth);
        addCircleDescender(secondCircle, originalHeight - getHeight(elem) / 2 + strokeWidth);
        addCircleDescender(thirdCircle, 3);
    }, animationInterval * 7 + 100);




}


function cellSplit(elem, distance) {
    secondElem = elem.cloneNode(true);
    elem.parentElement.appendChild(secondElem);
    moveElemHorizontalTwo(secondElem, distance);
    return secondElem;
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



function splitLeftSmall(elem, animationInterval) {

    secondElem = elem.cloneNode(true);
    elem.parentElement.appendChild(secondElem);
    secondElem.style.backgroundColor = 'blue';
    secondElem.classList.add('move-left-small');

    setTimeout(function () {
        secondElem.classList.remove('move-left-small');
        var style = window.getComputedStyle(secondElem, null);
        secondElem.style.left = style.left;
    }, animationInterval);

    return secondElem;
}



function rotateElem(elem) {

    elem.classList.add("rotate-ninety");


}

function copyNode(elem) {
    var dupNode = elem.cloneNode(true);
    return dupNode;
}



const shrinkCircle = (elem, animationInterval) => {

    elem.classList.add('shrink-circle');
    var style = window.getComputedStyle(elem, null);

    setTimeout(function () {
        elem.style.width = style.width;
        elem.style.height = style.height;
        elem.classList.remove('shrink-circle');
    }, animationInterval);
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



const resizeElement = (elem, amount) => {

    var style = window.getComputedStyle(elem, null);

    //Get style values of the element (minus 'px');
    var elemWidth = parseInt(style.width.slice(0, -2));
    var elemHeight = parseInt(style.height.slice(0, -2));

    elem.style.height = elemHeight * amount + "px";
    elem.style.width = elemWidth * amount + "px";

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
    let root = document.documentElement;
    root.style.setProperty('--inner-circle-width', elemWidth - 2 * strokeWidth + "px");
    root.style.setProperty('--inner-circle-height', elemWidth - 2 * strokeWidth + "px");

    //Create new circle, add to parent
    var innerCircle = document.createElement('div');
    innerCircle.setAttribute("class", "inner-triangle");
    elem.appendChild(innerCircle);
}


function emptyOutCircle(elem, strokeWidth, custom) {

    var style = window.getComputedStyle(elem, null);

    //Get style values of the element (minus 'px');
    var elemWidth = getWidth(elem);
    var elemHeight = getHeight(elem);

    console.log("width is : " + elemWidth);

    if (custom) {
        elemWidth = 45;
        elemHeight = 45;
    }

    //Set the inner circle width and height
    //Minus 2*stroke width (8)
    let root = document.documentElement;
    root.style.setProperty('--inner-circle-width', elemWidth - 2 * strokeWidth + "px");
    root.style.setProperty('--inner-circle-height', elemWidth - 2 * strokeWidth + "px");

    //Create new circle, add to parent
    var innerCircle = document.createElement('div');
    innerCircle.classList.add("inner-circle");
    innerCircle.classList.add("inner-circle-custom");
    elem.appendChild(innerCircle);

    setTimeout(function () {
        var style = window.getComputedStyle(innerCircle, null);
    }, animationInterval);
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

function positionElement(element, top, left) {
    element.style.top = top + "px";
    element.style.left = left + "px";
}

function setElementSize(element, height, width) {
    console.log("setting size");
    element.style.left = height + "px";
    element.style.width = width + "px";
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
    var dupNode = elem.cloneNode(true);

    let root = document.documentElement;
    root.style.setProperty('--left-initial', style.left);
    root.style.setProperty('--left-final', getLeftDistance(elem) + getWidth(elem) + gap + "px");

    dupNode.classList.add("slide-horizontal");
    document.getElementById('box').appendChild(dupNode);

    setTimeout(function () {
        //seems to do nothing
        fixElement(dupNode);
//        var style = window.getComputedStyle(dupNode, null);
//        dupNode.style.left = style.left;
//        dupNode.classList.remove("slide-horizontal");
//        //Would ideally call the other function here...?
    }, animationInterval);


    return dupNode;
}

const splitCellVertical = (elem, gap, animationInterval) => {

    var style = window.getComputedStyle(elem, null);
    var dupNode = elem.cloneNode(true);

    dupNode.classList.remove("slide-horizontal");

    let root = document.documentElement;

    const topFinal = getTopDistance(elem) + getHeight(elem) + gap + "px";

    root.style.setProperty('--top-initial', style.top);
    root.style.setProperty('--top-final', topFinal);

    dupNode.classList.add("slide-vertical");
    document.getElementById('box').appendChild(dupNode);

    return dupNode;
}


const moveCellVertical = (elem, gap, animationInterval) => {

    var style = window.getComputedStyle(elem, null);

    elem.classList.remove("slide-horizontal");

    let root = document.documentElement;
    //Why does this need the 1...
    const topFinal = getTopDistance(elem) + gap + "px";

    root.style.setProperty('--top-initial', style.top);
    root.style.setProperty('--top-final', topFinal);

    elem.classList.add("slide-vertical");

    //Need to remove the class and fix the property once animation is over
    //Otherwise it will be affected by other elements
    setTimeout(function () {
        var style = window.getComputedStyle(elem, null);
        elem.style.top = style.top;
        elem.classList.remove("slide-vertical");
    }, animationInterval);
}





const divideCellHorizontal = (elem, gap) => {


    var style = window.getComputedStyle(elem, null);
    var dupNode = elem.cloneNode(true);

    //Get style values of the element (minus 'px');
    var elemLeftValue = parseInt(style.left.slice(0, -2));
    var elemWidth = parseInt(style.width.slice(0, -2));

    dupNode.classList.add("slide-horizontal");

    let root = document.documentElement;
    root.style.setProperty('--left-initial', style.left);
    root.style.setProperty('--left-final', elemLeftValue + elemWidth + gap + "px");
    document.getElementById('box').appendChild(dupNode);

    return dupNode;
}

const divideCellVertical = (elem, gap) => {

    var style = window.getComputedStyle(elem, null);
    var dupNode = elem.cloneNode(true);
    let root = document.documentElement;

    //Get style values of the element (minus 'px');
    var elemTopValue = parseInt(style.top.slice(0, -2));
    var elemWidth = parseInt(style.width.slice(0, -2));

    dupNode.classList.add("slide-vertical");
    root.style.setProperty('--top-initial', elemTopValue + "px");
    root.style.setProperty('--top-final', elemTopValue - elemWidth - gap + "px");
    document.getElementById('box').appendChild(dupNode);
    return dupNode;
}


// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
function translateElement(elem, down, right, animationInterval) {
    var pos = 0;
    var id = setInterval(frame, animationInterval);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}




function getWidth(elem) {
    var style = window.getComputedStyle(elem, null);
    // Return pixel width of element as an integer, removing "px"
    return parseInt(style.width.slice(0, -2));
}

function getHeight(elem) {
    var style = window.getComputedStyle(elem, null);
    // Return pixel height of element as an integer, removing "px"
    return parseInt(style.height.slice(0, -2));
}

function getLeftDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    // Return left value of element as an integer, removing "px"
    return parseInt(style.left.slice(0, -2));
}

function getTopDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    // Return top Value of element as an integer, removing "px"
    return parseInt(style.top.slice(0, -2));
}

function getVerticalCenter(elem) {
    return getTopDistance(elem) + getHeight(elem) / 2;
}

function getHorizontalCenter(elem) {
    return getLeftDistance(elem) + getWidth(elem) / 2;
}

function getBottomDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    var top = parseInt(style.top.slice(0, -2));
    return top + getHeight(elem);
}



// http://upshots.org/actionscript/jsas-understanding-easing
/*
    @t is the current time (or position) of the tween. This can be seconds or frames, steps, seconds, ms, whatever – as long as the unit is the same as is used for the total time [3].
    @b is the beginning value of the property.
    @c is the change between the beginning and destination value of the property.
    @d is the total time of the tween.
*/
function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}

function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}









//}
