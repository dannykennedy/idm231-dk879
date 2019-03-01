"use strict";

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

    let triangles = [];

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        triangles = fanOutHorizontal(elem, 3, strokeWidth, animationInterval);
    }, animationInterval);

    setTimeout(function () {
        triangles.forEach(function (item) {
            hollowOutTriangle(item, strokeWidth);
        });
    }, animationInterval * 2);

    setTimeout(function () {
        triangles.forEach(function (item) {
            splitCellVertical(item, 0, animationInterval);
        });
    }, animationInterval * 3);
}


const sagittarius = (triangle) => {

    shrinkElement(triangle, animationInterval);

    setTimeout(function () {
        hollowOutTriangle(triangle, strokeWidth);
    }, animationInterval);

    setTimeout(function () {
        var crossBar = createBar(80, "vertical");
        var leftDistance = getLeftDistance(triangle) + getWidth(triangle) / 2 - strokeWidth / 2;
        var topDistance = getTopDistance(triangle) + strokeWidth;
        positionElement(crossBar, topDistance, leftDistance);
        triangle.parentElement.appendChild(crossBar);
    }, animationInterval * 2);

    setTimeout(function () {
        var crossBar = createBar(getWidth(triangle), "horizontal");
        var leftDistance = getLeftDistance(triangle);
        var topDistance = getTopDistance(triangle) + 50;
        positionElement(crossBar, topDistance, leftDistance);
        triangle.parentElement.appendChild(crossBar);
    }, animationInterval * 3);


    var invisibleBox = document.getElementById('triangle-box');
    setTimeout(function () {
        rotateElem(invisibleBox);
    }, animationInterval * 4);



}




// SCORPIO
const scorpio = (elem) => {

    let topCircles = [];
    var fourthCircle;
    var triangle = document.getElementById('original-triangle');

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        topCircles = fanOutHorizontal(elem, 3, strokeWidth, animationInterval);
        fourthCircle = splitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
        hollowOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 2);

    setTimeout(function () {
        moveCellVertical(fourthCircle, 50, animationInterval);
    }, animationInterval * 3);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            maskPartOfCircle(item, 'bottom', 50);
        });
        maskPartOfCircle(elem, 'left', 50);
    }, animationInterval * 3 + 100);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            addCircleDescender(item, 50);
        });
    }, animationInterval * 4 + 100);

    setTimeout(function () {
        maskPartOfCircle(fourthCircle, 'top', 50);
    }, animationInterval * 5);

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

    setTimeout(function () {
         const final = copyNode(elem.parentElement);
        final.style.marginTop = 500;
    
        final.style.border = "1px solid #FFF";
//        final.parentElement.style.gridRowStart = 2;
        elem.parentElement.parentElement.appendChild(final);
        final.style.gridColumnStart = 2;
//        final.parentElement.style.backgroundColor = 'red';
        console.log(final);
    }, animationInterval * 8 + 100);

   




}


function virgo(elem) {

    let topCircles = [];
    let fourthCircle, fifthCircle;
    let triangle = document.getElementById('original-triangle');

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        topCircles = fanOutHorizontal(elem, 3, strokeWidth, animationInterval);
        fourthCircle = splitCellHorizontal(elem, getWidth(elem) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
        hollowOutCircle(fourthCircle, strokeWidth);
    }, animationInterval * 2);

    setTimeout(function () {
        fifthCircle = splitCellVertical(fourthCircle, 15, animationInterval);
        //        fifthCircle.style.zIndex = 2;
    }, animationInterval * 3);

    setTimeout(function () {
        fourthCircle.style.zIndex = 2000;
        topCircles.forEach(function (item) {
            maskPartOfCircle(item, 'bottom', 50);
        });
        maskPartOfCircle(elem, 'left', 50);

        topCircles.forEach(function (item) {
            addCircleDescender(item, 50);
        });

    }, animationInterval * 4 + 100);

    setTimeout(function () {
        maskPartOfCircle(fifthCircle, 'top', 50);
        maskPartOfCircle(fifthCircle, 'right', 70);
    }, animationInterval * 5);

    setTimeout(function () {
        fixElement(fifthCircle);
        moveCellVertical(fourthCircle, 10, animationInterval);
        shrinkElementArbitrary(triangle, animationInterval, 69);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        lineFromTriangle(triangle, strokeWidth);
    }, animationInterval * 7 + 100);

    setTimeout(function () {
        var style = window.getComputedStyle(triangle, null);
        triangle.style.width = style.width;
        triangle.style.height = style.height;

        triangle.classList.remove('shrink-elem-arbitrary');

        triangle.style.zIndex = 2002;

        triangle.style.left = getLeftDistance(fourthCircle) - 1 + "px";
        triangle.style.top = getBottomDistance(fourthCircle) - 20 + "px";

        moveElement(triangle, 0, 0, animationInterval);
    }, animationInterval * 8 + 100);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");
    setTimeout(function () {
        mask.style.width = getWidth(fourthCircle) - 9 + "px";
        mask.style.height = getHeight(fourthCircle) / 2 + "px";
        mask.style.top = getTopDistance(fourthCircle) + getHeight(fourthCircle) / 2 + 1 + "px";
        mask.style.left = getLeftDistance(fourthCircle) + "px";
        mask.style.zIndex = 2001;
        elem.parentElement.appendChild(mask);

    }, animationInterval * 9 + 100);

}

function leo(circle) {

    let circles = [];
    shrinkElement(circle, animationInterval);

    setTimeout(function () {
        circles = fanOutHorizontal(circle, 3, strokeWidth, animationInterval);
    }, animationInterval);

    setTimeout(function () {
        circles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
        fixElement(circles[2]);
        fixElement(circles[1]);
        moveElement(circle, getLeftDistance(circle) + strokeWidth, getTopDistance(circle) + getHeight(circle) - 2 * strokeWidth, animationInterval);
    }, animationInterval * 2 + 200);

    setTimeout(function () {
        fixElement(circle);
        moveElement(circles[2], getLeftDistance(circles[2]), getTopDistance(circles[2]) + (2 * getHeight(circle)) - (3 * strokeWidth), animationInterval);
    }, animationInterval * 3 + 300);

    setTimeout(function () {
        addCircleDescender(circles[1], 60);
        maskPartOfCircle(circles[2], 'top', 60);
    }, animationInterval * 4);

    setTimeout(function () {
        addMask(circle, getTopDistance(circle), getLeftDistance(circle), 20, 20);
        addMask(circles[1], partwayDown(circles[1], 60), getLeftDistance(circles[1]) + 15, 15, 15);
    }, animationInterval * 5);


}



function capricorn(elem) {

    const circle = document.getElementById('original-circle');
    console.log(circle);

    flipTriangle(elem);
    const secondCircle = splitCellVertical(circle, -170, animationInterval);

    setTimeout(function () {
        shrinkElement(circle, animationInterval);
        hollowFlippedTriangle(elem, strokeWidth);
    }, animationInterval);

    setTimeout(function () {
        hollowFlippedTriangle(elem, strokeWidth);
        var style = window.getComputedStyle(circle, null);
        circle.style.width = style.width;
        circle.style.height = style.height;
        circle.classList.remove('shrink-elem');
        moveElement(circle, getRightDistance(elem) - getWidth(circle) - 7, getBottomDistance(elem) - getHeight(circle), animationInterval);
    }, animationInterval * 2);

    setTimeout(function () {
        hollowOutCircle(circle, strokeWidth);
        hollowOutCircle(secondCircle, strokeWidth);
        elem.style.zIndex = 1000;
        circle.style.zIndex = 1002;
        circle.childNodes[0].style.zIndex = 1003;
    }, animationInterval * 3);

    setTimeout(function () {
        secondCircle.classList.remove('move-down');
        console.log(secondCircle);
        moveElement(secondCircle, getLeftDistance(elem), getBottomDistance(elem) - getHeight(circle) - 8, animationInterval);
    }, animationInterval * 4);

    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'right', 88);

        mask.style.width = getWidth(elem) / 3 + "px";
        mask.style.height = getHeight(elem) / 3 + "px";
        mask.style.top = getTopDistance(elem) + getHeight(elem) * (2 / 3) + 5 + "px";
        mask.style.left = getLeftDistance(elem) + getWidth(elem) / 3 + "px";
        mask.style.zIndex = 1001;
        elem.parentElement.appendChild(mask);
    }, animationInterval * 5);



}

function flipTriangle(elem) {
    elem.classList.add('flip-triangle');
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

    var circles = [];

    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        circles = fanOutHorizontal(elem, 2, strokeWidth, animationInterval);
    }, animationInterval)

    setTimeout(function () {
        circles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
    }, animationInterval * 2);

    setTimeout(function () {
        circles.forEach(function (item) {
            maskPartOfCircle(item, 'bottom', 50);
        });
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
        secondCircle = splitCellCancer(elem, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        thirdCircle = splitCellCancer(secondCircle, strokeWidth * (-1), animationInterval);
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

function addMask(elem, top, left, width, height) {

    const mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    mask.style.width = width + "px";
    mask.style.top = top + "px";
    mask.style.left = left + "px";
    mask.style.height = height + "px";

    elem.parentElement.appendChild(mask);

    return mask;
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
            mask.style.width = elemWidth + 5 + "px";
            mask.style.top = elemTopValue + (elemHeight * ((100 - percentToMask) / 100)) + "px";
            mask.style.left = elemLeftValue + "px";
            mask.style.height = elemHeight * (percentToMask / 100) + 2 + "px";
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
    //    mask.style.backgroundColor = 'red';

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

const splitCellCancer = (elem, gap, animationInterval) => {

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


const splitCellHorizontal = (elem, gap, animationInterval) => {

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
    const newNode = elem.cloneNode(true);
    newNode.setAttribute('id', Math.random(10));
    return newNode;
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

// Return right value of element as an integer, removing "px"
function getRightDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    return getLeftDistance(elem) + getWidth(elem);
}

// Return top Value of element as an integer, removing "px"
function getTopDistance(elem) {
    var style = window.getComputedStyle(elem, null);
    return parseInt(style.top.slice(0, -2));
}

function getBottomDistance(elem) {
    return getTopDistance(elem) + getHeight(elem);
}

function partwayDown(elem, percent) {
    return getTopDistance(elem) + getHeight(elem) * (percent / 100);
}

//Given the stroke width, get the horizontal strokewidth at base of triangle (pythagoras) 
function getTriangleBaseStrokeWidth(strokeWidth) {
    return strokeWidth / (Math.sin(degreesToRadians(63.435)));
    //    return Math.sqrt(Math.pow(strokeWidth, 2) + Math.pow((1 / 2) * strokeWidth, 2));
}



function triangleLongEdgeGivenHeight(height) {
    return height * (Math.sqrt(3 / 2));
}

function triangleHeightGivenLongEdge(longEdge) {
    return longEdge * (Math.sqrt(4 / 5));
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
    elem.classList.remove('move-left');
}

// "Fans out" the element and returns an array including the element and all the new fanned out nodes
function fanOutHorizontal(elem, number, strokeWidth, animationInterval) {
    let elems = [];
    elems.push(elem);
    for (var i = 1; i < number; i++) {
        let newElem = splitCellHorizontal(elem, getWidth(elem) * (i - 1) + strokeWidth * (i * (-1)), animationInterval);
        newElem.setAttribute('id', 'circle' + (i + 1));
        elems.push(newElem);
    }
    return elems;
}

function lineFromTriangle(elem, strokeWidth) {

    // x is the base width of the line
    // y - z = x/2
    //                                    z       y          x           
    //    -webkit - clip - path: polygon(50 % 0, 55 % 10 % , 10 % 100 % , 0 100 % );
    //    clip - path: polygon(50 % 0, 55 % 10 % , 10 % 100 % , 0 100 % );

    fixElement(elem);

    const baseStrokeWidth = getTriangleBaseStrokeWidth(strokeWidth);
    const baseStrokeWidthAsPercent = (100 / getWidth(elem)) * baseStrokeWidth;
    const triangleHeight = (Math.sqrt(3) / 2) * baseStrokeWidthAsPercent;
    const halfWidthPlus50 = 50 + baseStrokeWidthAsPercent / 2;

    let root = document.documentElement;
    root.style.setProperty('--triangle-line-clip-path', "polygon(50% 0, " + halfWidthPlus50 + "% " + triangleHeight + "%, " + baseStrokeWidthAsPercent + "% 100%, 0 100%)");

    elem.classList.add('triangle-line');
}

function asPercent(length, asPercentOfLength) {
    return (100 / asPercentOfLength) * length;
}

//Angle in radians = Angle in degrees x PI / 180.
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function hollowFlippedTriangle(elem, strokeWidth) {

    let topLeftDot = {};
    let topRightDot = {};
    let bottomDot = {};
    const relativeStrokeWidth = asPercent(strokeWidth, getHeight(elem));

    bottomDot.y = 100 - relativeStrokeWidth / Math.cos(degreesToRadians(36.87)) / Math.sqrt(3 / 2);
    bottomDot.x = 50 - (relativeStrokeWidth / 2);
    topRightDot.y = relativeStrokeWidth;
    topRightDot.x = 100 - ((relativeStrokeWidth / 2)) - (relativeStrokeWidth / Math.cos(degreesToRadians(26.565)));
    topLeftDot.y = relativeStrokeWidth;
    topLeftDot.x = relativeStrokeWidth / 2;

    const hollowPolygonString = `polygon(0 0, 100% 0, 50% 100%, ${bottomDot.x}% ${bottomDot.y}%, ${topRightDot.x}% ${topRightDot.y}%, ${topLeftDot.x}% ${topLeftDot.y}%)`;

    const preHollowPolygonString = `polygon(0 0, 100% 0, 50% 100%, ${bottomDot.x}% ${bottomDot.y}%, 25% 50%, ${topLeftDot.x}% ${topLeftDot.y}%)`;

    let root = document.documentElement;
    root.style.setProperty('--flipped-hollow-triangle-clip-path', hollowPolygonString);
    root.style.setProperty('--flipped-prehollow-triangle-clip-path', preHollowPolygonString);

    elem.classList.add('hollow-flipped-triangle');
}

function hollowOutTriangle(elem) {

    console.log(elem);

    let topDot = {};
    let bottomLeftDot = {};
    let bottomRightDot = {};
    const relativeStrokeWidth = asPercent(strokeWidth, getHeight(elem));

    bottomLeftDot.x = getTriangleBaseStrokeWidth(relativeStrokeWidth);
    bottomRightDot.x = 100 - getTriangleBaseStrokeWidth(relativeStrokeWidth);
    topDot.y = relativeStrokeWidth / (Math.cos(degreesToRadians(63.435)));

    const preHollowPolygonString = `polygon(100% 100%, ${bottomRightDot.x}% 100%, 50% 100%, ${bottomLeftDot.x}% 100%, 0 100%, 50% 0)`;

    const hollowPolygonString = `polygon(100% 100%, ${bottomRightDot.x}% 100%, 50% ${topDot.y}%, ${bottomLeftDot.x}% 100%, 0 100%, 50% 0)`;

    let root = document.documentElement;
    root.style.setProperty('--hollow-triangle-clip-path', hollowPolygonString);
    root.style.setProperty('--prehollow-triangle-clip-path', preHollowPolygonString);

    elem.classList.add('hollow-triangle');
}



//function clipHollowedTriangle(elem, strokeWidth) {
//
//    let topLeftDot = {};
//    let topRightDot = {};
//    let bottomDot = {};
//    const relativeStrokeWidth = asPercent(strokeWidth, getHeight(elem));
//
//    bottomDot.y = 100 - relativeStrokeWidth / Math.cos(radiansToDegrees(36.87)) / Math.sqrt(3 / 2);
//    bottomDot.x = 50 - (relativeStrokeWidth / 2);
//    topRightDot.y = relativeStrokeWidth;
//    topRightDot.x = 100 - ((relativeStrokeWidth / 2)) - (relativeStrokeWidth / Math.cos(radiansToDegrees(26.565)));
//    topLeftDot.y = relativeStrokeWidth;
//    topLeftDot.x = relativeStrokeWidth / 2;
//
//    const newPolygonString = `polygon(0 0, 100% 0, 50% 100%, ${bottomDot.x}% ${bottomDot.y}%, ${topRightDot.x}% ${topRightDot.y}%, ${topLeftDot.x}% ${topLeftDot.y}%)`;
//
//    const originalPolygonString = `polygon(0 0, 100% 0, 50% 100%, ${bottomDot.x}% ${bottomDot.y}%, ${topRightDot.x}% ${topRightDot.y}%, ${topLeftDot.x}% ${topLeftDot.y}%)`;
//
//    let root = document.documentElement;
//    root.style.setProperty('--flipped-hollow-triangle-clip-path', newPolygonString);
//    root.style.setProperty('--flipped-prehollow-triangle-clip-path', originalPolygonString);
//
//    elem.classList.add('hollow-flipped-triangle');
//}
