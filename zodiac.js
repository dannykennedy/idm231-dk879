"use strict";

// Set the animation interval
var animationInterval = 1000;

// Get the stroke width from CSS, convert to an integer
var strokeWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--stroke-width');
strokeWidth = parseInt(strokeWidth.slice(0, -2));


// Credit to: https://www.allure.com/story/zodiac-sign-personality-traits-dates
const starSignQualities = {

    aries: {
        name: "Aries",
        dates: "March 21 - April 19",
        image: 'aries.png',
        description: "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.",
        chords: ["f", "fm", "c"]
    },
    taurus: {
        name: "Taurus",
        dates: "April 20 - May 20",
        description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors.",
        chords: ["g", "c"]
    },
    gemini: {
        name: "Gemini",
        dates: "May 21 - June 20",
        description: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.",
        chords: ["dm", "am"]
    },
    leo: {
        name: "Leo",
        dates: "July 23 - August 22",
        description: "Roll out the red carpet, because Leo has arrived. Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.",
        chords: ["g", "g7", "c"]
    },
    virgo: {
        name: "Virgo",
        dates: "August 23 - September 22",
        description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
        chords: ["c", "g", "am", "e", "f", "fm"]
    },
    libra: {
        name: "Libra",
        dates: "September 23 - October 22",
        description: "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.",
        chords: ["f", "g", "c"]
    },
    sagittarius: {
        name: "Sagittarius",
        dates: "November 22 - December 21",
        description: "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
        chords: ["f", "f-2", "em"]
    },
    capricorn: {
        name: "Capricorn",
        dates: "December 22 - January 19",
        description: "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
        chords: ["c", "dm", "g"]
        
    },
    aquarius: {
        name: "Aquarius",
        dates: "January 20 - February 18",
        description: "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.", 
        chords: ["am", "dm", "g"]
    },
    pisces: {
        name: "Pisces",
        dates: "February 19 - March 20",
        description: "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces's attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.",
        chords: ["bdim", "c"]
    },
    scorpio: {
        name: "Scorpio",
        dates: "October 23 - November 21",
        description: "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.",
        chords: ["c", "am", "em", "g"]
    },
    cancer: {
        name: "Cancer",
        dates: "June 21 - July 22",
        description: "Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive, and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies of a room.",
        chords: ["c", "e", "f", "fm"]
    }
};


function computeStarSign(whichMonth, whichDayOfMonth) {

    const circle = document.getElementById('original-circle');
    const triangle = document.getElementById('original-triangle');
    const datePicker = document.getElementById('date-picker');
    datePicker.classList.add('fade-out');

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        capricorn(triangle);
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        sagittarius(triangle);
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        scorpio(circle);
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        libra(circle);
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        virgo(circle);
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        leo(circle);
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        cancer(circle);
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        gemini(circle);
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        taurus(circle);
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        aries(circle);
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        pisces(circle);
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        aquarius(triangle);
    } else {
        alert("30 days hath September, all the rest I don't remember.")
    }
}


function animateStarSign() {

    const monthDropdown = document.getElementById("select-month");
    const month = monthDropdown.options[monthDropdown.selectedIndex].value;

    const dayDropdown = document.getElementById("select-day");
    const day = dayDropdown.options[dayDropdown.selectedIndex].value;

    const astroSign = computeStarSign(month, day);

}



// AUDIO 

function playChord(chordName) {
    const chord = document.getElementById(chordName);
    chord.play();
}



// STAR SIGN FUNCTIONS

// TAURUS
const taurus = (circle) => {

    setup();

    fadeOutTriangle();
    playChord(starSignQualities.taurus.chords[0]);

    hollowOutCircle(circle, strokeWidth);
    var topCircle = splitCellVertical(circle, -170, animationInterval);
    setTimeout(function () {
        maskPartOfCircle(topCircle, "top", 60);
    }, animationInterval);

    //Raise up icon and add description
    setTimeout(function () {
        playChord(starSignQualities.taurus.chords[1]);
        finishAnimation("taurus");
    }, animationInterval * 2);

}


const taurus2 = (circle) => {

    var topCircle;
    fadeOutTriangle();
    shrinkElementArbitrary(circle, animationInterval, 66);

    setTimeout(function () {
        hollowOutCircle(circle, strokeWidth);
    }, animationInterval);

    setTimeout(function () {
        topCircle = splitCellVertical(circle, -100, animationInterval);
    }, animationInterval * 2);

    setTimeout(function () {
        maskPartOfCircle(topCircle, "top", 50);
    }, animationInterval * 3);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("taurus");
    }, animationInterval * 4);

}


// AQUARIUS
const aquarius = (triangle) => {

    setup();

    fadeOutCircle();

    let triangles = [];
    playChord(starSignQualities.aquarius.chords[0]);

    shrinkElement(triangle, animationInterval);

    setTimeout(function () {
        triangles = fanOutHorizontal(triangle, 3, strokeWidth, animationInterval);
    }, animationInterval);

    setTimeout(function () {
        playChord(starSignQualities.aquarius.chords[1]);
        triangles.forEach(function (item) {
            hollowOutTriangle(item, strokeWidth);
        });
    }, animationInterval * 2);

    setTimeout(function () {
        triangles.forEach(function (item) {
            splitCellVertical(item, 0, animationInterval);
        });
    }, animationInterval * 3);

    //Raise up icon and add description
    setTimeout(function () {
        playChord(starSignQualities.aquarius.chords[2]);
        finishAnimation("aquarius");
    }, animationInterval * 4);
}

const sagittarius = (triangle) => {

    setup();

    fadeOutCircle();

    shrinkElement(triangle, animationInterval);
    playChord(starSignQualities.sagittarius.chords[0]);

    setTimeout(function () {
        hollowOutTriangle(triangle, strokeWidth);
    }, animationInterval);

    setTimeout(function () {
        playChord(starSignQualities.sagittarius.chords[1]);
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
        playChord(starSignQualities.sagittarius.chords[2]);
        rotateElem(invisibleBox);
    }, animationInterval * 4);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("sagittarius");
    }, animationInterval * 5);



}


// SCORPIO
const scorpio = (circle) => {

    setup();

    let topCircles = [];
    var fourthCircle;
    var triangle = document.getElementById('original-triangle');

    shrinkElement(circle, animationInterval);
    playChord(starSignQualities.scorpio.chords[0]);

    setTimeout(function () {
        topCircles = fanOutHorizontal(circle, 3, strokeWidth, animationInterval);
        fourthCircle = splitCellHorizontal(circle, getWidth(circle) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
        hollowOutCircle(fourthCircle, strokeWidth);
        playChord(starSignQualities.scorpio.chords[1]);
    }, animationInterval * 2);

    setTimeout(function () {
        moveCellVertical(fourthCircle, 50, animationInterval);
    }, animationInterval * 3);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            maskPartOfCircle(item, 'bottom', 50);
        });
        maskPartOfCircle(circle, 'left', 50);
    }, animationInterval * 3 + 100);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            addCircleDescender(item, 50);
        });
        playChord(starSignQualities.scorpio.chords[2]);
    }, animationInterval * 4 + 100);

    setTimeout(function () {
        maskPartOfCircle(fourthCircle, 'top', 50);
    }, animationInterval * 5);

    setTimeout(function () {
        shrinkElemFour(triangle, animationInterval);
        playChord(starSignQualities.scorpio.chords[3]);
    }, animationInterval * 6 + 100);

    setTimeout(function () {
        var style = window.getComputedStyle(triangle, null);
        triangle.style.width = style.width;
        triangle.style.height = style.height;
        triangle.classList.remove('shrink-elem-four');
        triangle.style.zIndex = 1000;
        moveElement(triangle, getLeftDistance(fourthCircle) + getWidth(fourthCircle) - getWidth(triangle) * (3 / 4), getTopDistance(fourthCircle) + getHeight(fourthCircle) / 2 - getHeight(triangle) + 1, animationInterval);
    }, animationInterval * 7 + 100);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("scorpio");
    }, animationInterval * 8 + 150);

}


const virgo = (circle) => {

    setup();

    let topCircles = [];
    let fourthCircle, fifthCircle;
    let triangle = document.getElementById('original-triangle');

    shrinkElement(circle, animationInterval);
    playChord(starSignQualities.virgo.chords[0]);

    setTimeout(function () {
        topCircles = fanOutHorizontal(circle, 3, strokeWidth, animationInterval);
        fourthCircle = splitCellHorizontal(circle, getWidth(circle) * 2 + strokeWidth * (-3), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        topCircles.forEach(function (item) {
            hollowOutCircle(item, strokeWidth);
        });
        hollowOutCircle(fourthCircle, strokeWidth);
        playChord(starSignQualities.virgo.chords[1]);
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
        maskPartOfCircle(circle, 'left', 50);

        topCircles.forEach(function (item) {
            addCircleDescender(item, 50);
        });
        playChord(starSignQualities.virgo.chords[2]);

    }, animationInterval * 4 + 100);

    setTimeout(function () {
        maskPartOfCircle(fifthCircle, 'top', 50);
        maskPartOfCircle(fifthCircle, 'right', 70);
    }, animationInterval * 5);

    setTimeout(function () {
        fixElement(fifthCircle);
        moveCellVertical(fourthCircle, 10, animationInterval);
        shrinkElementArbitrary(triangle, animationInterval, 69);
        playChord(starSignQualities.virgo.chords[3]);
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
        playChord(starSignQualities.virgo.chords[4]);
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
        circle.parentElement.appendChild(mask);

    }, animationInterval * 9 + 100);

    //Raise up icon and add description
    setTimeout(function () {
        playChord(starSignQualities.virgo.chords[5]);
        finishAnimation("virgo");
    }, animationInterval * 10 + 100);

}

const leo = (circle) => {

    setup();

    fadeOutTriangle();

    let circles = [];
    shrinkElement(circle, animationInterval);
    playChord(starSignQualities.leo.chords[0]);

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
        playChord(starSignQualities.leo.chords[1]);
    }, animationInterval * 2 + 200);

    setTimeout(function () {
        fixElement(circle);
        moveElement(circles[2], getLeftDistance(circles[2]), getTopDistance(circles[2]) + (2 * getHeight(circle)) - (3 * strokeWidth), animationInterval);
    }, animationInterval * 3 + 300);

    setTimeout(function () {
        addCircleDescender(circles[1], 60);
        maskPartOfCircle(circles[2], 'top', 60);
        playChord(starSignQualities.leo.chords[2]);
    }, animationInterval * 4);

    setTimeout(function () {
        addMask(circle, getTopDistance(circle), getLeftDistance(circle), 20, 20);
        addMask(circles[1], partwayDown(circles[1], 60), getLeftDistance(circles[1]) + 15, 15, 15);
    }, animationInterval * 5);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("leo");
    }, animationInterval * 6);


}

const capricorn = (triangle) => {

    setup();

    const circle = document.getElementById('original-circle');
    console.log(circle);

    flipTriangle(triangle);
    const secondCircle = splitCellVertical(circle, -170, animationInterval);
    playChord(starSignQualities.capricorn.chords[0]);

    setTimeout(function () {
        shrinkElement(circle, animationInterval);
        hollowFlippedTriangle(triangle, strokeWidth);
    }, animationInterval);

    setTimeout(function () {
        playChord(starSignQualities.capricorn.chords[1]);
        hollowFlippedTriangle(triangle, strokeWidth);
        var style = window.getComputedStyle(circle, null);
        circle.style.width = style.width;
        circle.style.height = style.height;
        circle.classList.remove('shrink-elem');
        moveElement(circle, getRightDistance(triangle) - getWidth(circle) - 7, getBottomDistance(triangle) - getHeight(circle), animationInterval);
    }, animationInterval * 2);

    setTimeout(function () {
        hollowOutCircle(circle, strokeWidth);
        hollowOutCircle(secondCircle, strokeWidth);
        triangle.style.zIndex = 1000;
        circle.style.zIndex = 1002;
        circle.childNodes[0].style.zIndex = 1003;
    }, animationInterval * 3);

    setTimeout(function () {
        playChord(starSignQualities.capricorn.chords[2]);
        secondCircle.classList.remove('move-down');
        console.log(secondCircle);
        moveElement(secondCircle, getLeftDistance(triangle), getBottomDistance(triangle) - getHeight(circle) - 8, animationInterval);
    }, animationInterval * 4);

    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        maskPartOfCircle(secondCircle, 'bottom', 50);
        maskPartOfCircle(secondCircle, 'right', 88);

        mask.style.width = getWidth(triangle) / 3 + "px";
        mask.style.height = getHeight(triangle) / 3 + "px";
        mask.style.top = getTopDistance(triangle) + getHeight(triangle) * (2 / 3) + 5 + "px";
        mask.style.left = getLeftDistance(triangle) + getWidth(triangle) / 3 + "px";
        mask.style.zIndex = 1001;
        triangle.parentElement.appendChild(mask);
    }, animationInterval * 5);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("capricorn");
    }, animationInterval * 6);
}

const libra = (elem) => {

    setup();
    
    fadeOutTriangle();

    var originalCircleWidth = getWidth(elem);
    var originalCircleBottom = getBottomDistance(elem);

    playChord(starSignQualities.libra.chords[0]);
    shrinkElement(elem, animationInterval);

    setTimeout(function () {
        hollowOutCircle(elem, strokeWidth);
    }, animationInterval);

    //Create mask
    var mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    setTimeout(function () {
        playChord(starSignQualities.libra.chords[1]);
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
        playChord(starSignQualities.libra.chords[2]);
        var bar1 = createBar(originalCircleWidth, "horizontal");
        positionElement(bar1, originalCircleBottom - strokeWidth * 3, getLeftDistance(elem) - getWidth(elem) / 2);
        elem.parentElement.appendChild(bar1);
    }, animationInterval * 4);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("libra");
    }, animationInterval * 5);

}


// ARIES
const aries = (circle) => {

    setup();

    fadeOutTriangle();

    var circles = [];

    shrinkElement(circle, animationInterval);
    playChord(starSignQualities.aries.chords[0]);

    setTimeout(function () {
        circles = fanOutHorizontal(circle, 2, strokeWidth, animationInterval);
    }, animationInterval)

    setTimeout(function () {
        playChord(starSignQualities.aries.chords[1]);
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
        playChord(starSignQualities.aries.chords[2]);
        addCircleDescender(circle, 50);
    }, animationInterval * 4);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("aries");
    }, animationInterval * 5);
}

// GEMINI
const gemini = (circle) => {

    setup();
    fadeOutTriangle();
    playChord(starSignQualities.gemini.chords[0]);

    var gapBetweenCircles = 35;

    hollowOutCircle(circle, strokeWidth);
    var topCircle = splitCellVertical(circle, -210);

    setTimeout(function () {
        maskPartOfCircle(topCircle, 'top', 70);
        maskPartOfCircle(circle, 'bottom', 70);
    }, animationInterval);

    setTimeout(function () {
        var bar1 = createBar(gapBetweenCircles * 1.4, "vertical");
        positionElement(bar1, getBottomDistance(topCircle) - 8, getLeftDistance(circle) + getWidth(circle) * 0.3);
        circle.parentElement.appendChild(bar1);

        var bar2 = createBar(gapBetweenCircles * 1.4, "vertical");
        positionElement(bar2, getBottomDistance(topCircle) - 8, getLeftDistance(circle) + getWidth(circle) * 0.6);
        circle.parentElement.appendChild(bar2);
        playChord(starSignQualities.gemini.chords[1]);
    }, animationInterval * 2);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("gemini");
    }, animationInterval * 3);

}


// PISCES
const pisces = (circle) => {

    setup();
    playChord(starSignQualities.pisces.chords[0]);

    fadeOutTriangle();

    var gap = 20;

    var invisibleBox = document.getElementById("box");

    hollowOutCircle(circle, strokeWidth);
    var leftCircle = splitCellHorizontal(circle, gap, animationInterval);

    setTimeout(function () {
        maskPartOfCircle(circle, "left", 50);
        maskPartOfCircle(leftCircle, "right", 50);
    }, animationInterval);

    setTimeout(function () {
        var crossBar = createBar(getWidth(circle) + gap, "horizontal");
        var leftDistance = getLeftDistance(circle) + getWidth(circle) / 2;
        var topDistance = getTopDistance(circle) + getWidth(circle) / 2 - (strokeWidth/2);
        positionElement(crossBar, topDistance, leftDistance);
        invisibleBox.appendChild(crossBar);
        playChord(starSignQualities.pisces.chords[1]);
    }, animationInterval * 2);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("pisces");
    }, animationInterval * 3);

}

// CANCER
const cancer = (circle) => {

    setup();

    playChord(starSignQualities.cancer.chords[0]);

    fadeOutTriangle();

    const originalHeight = getHeight(circle);

    shrinkElement(circle, animationInterval);

    var secondCircle;
    var thirdCircle;

    circle.style.zIndex = 100;

    setTimeout(function () {
        secondCircle = splitCellCancer(circle, strokeWidth * (-1), animationInterval);
    }, animationInterval);

    setTimeout(function () {
        playChord(starSignQualities.cancer.chords[1]);
        thirdCircle = splitCellCancer(secondCircle, strokeWidth * (-1), animationInterval);
    }, animationInterval * 2 + 50);

    setTimeout(function () {
        hollowOutCircle(circle, strokeWidth);
        hollowOutCircle(thirdCircle, strokeWidth);
    }, animationInterval * 3);

    setTimeout(function () {
        playChord(starSignQualities.cancer.chords[2]);
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

        playChord(starSignQualities.cancer.chords[3]);

        //Create mask
        var mask = document.createElement('div');
        mask.setAttribute("class", "mask");
        //                mask.style.backgroundColor = "red";

        mask.style.width = getWidth(thirdCircle) + 5 + "px";
        mask.style.top = getTopDistance(thirdCircle) - strokeWidth + "px";
        mask.style.left = getLeftDistance(thirdCircle) + "px";
        mask.style.height = getHeight(thirdCircle) / 2 + strokeWidth + "px";

        circle.parentElement.appendChild(mask);

        //Create mask
        var mask2 = document.createElement('div');
        mask2.setAttribute("class", "mask");
        //                mask2.style.backgroundColor = "red";

        mask2.style.width = getWidth(circle) + 5 + "px";
        mask2.style.top = getBottomDistance(circle) - getHeight(circle) / 2 + "px";
        mask2.style.left = getLeftDistance(circle) + "px";
        mask2.style.height = getHeight(circle) / 2 + strokeWidth + "px";

        circle.parentElement.appendChild(mask2);


    }, animationInterval * 6);

    //Raise up icon and add description
    setTimeout(function () {
        finishAnimation("cancer");
    }, animationInterval * 7);


}


// ANIMATION FUNCTIONS

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

// Turn triangle into a line (left edge);
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






// ANIMATION HELPER FUNCTIONS

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

function asPercent(length, asPercentOfLength) {
    return (100 / asPercentOfLength) * length;
}

//Angle in radians = Angle in degrees x PI / 180.
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function fadeOutTriangle() {
    //Fade out triangle
    const triangle = document.getElementById("original-triangle");
    triangle.classList.add('fade-out');
}

function fadeOutCircle() {
    //Fade out triangle
    const circle = document.getElementById("original-circle");
    circle.classList.add('fade-out');
}

function flipTriangle(elem) {
    elem.classList.add('flip-triangle');
}




// PAGE HELPER FUNCTIONS

function removeOriginalIds() {
    const circle = document.getElementById('original-circle');
    const triangle = document.getElementById('original-triangle');
    const box = document.getElementById('box');

    circle.setAttribute('id', 'changed-circle');
    triangle.setAttribute('id', 'changed-triangle');
    box.setAttribute('id', 'changed-box');
}

// Raise up star sign, display text below
function finishAnimation(astroSign) {

    const box = document.getElementById('box');
    //    box.classList.remove('fade-in');

    var header = document.getElementsByTagName("HEADER")[0];
    header.style.zIndex = 999999999999999999999;
    box.style.zIndex = 1;
    box.classList.add('float-up');

//    //Add onclick of horoscope function
//    box.addEventListener("click", getHoroscope, false);

    setTimeout(function () {

        // Display refresh button
        const refreshButton = document.getElementById('button-refresh');
        refreshButton.style.display = 'block';

        removeOriginalIds();
        const newBox = document.createElement('div');
        newBox.setAttribute('id', 'box');
        newBox.style.zIndex = 4000;
        const container = document.getElementById('container');
        box.style.marginBottom = '0px';
        box.style.alignSelf = 'start';
        box.classList.remove('float-up');

        //Add text to box
        const astroText = document.createElement('div');
        astroText.classList.add('astro-text');
        astroText.classList.add('fade-in');
        astroText.innerHTML = "<h4>" + "<span id=\"starsign-name\">" + starSignQualities[astroSign].name + "</span>" + " (" + starSignQualities[astroSign].dates + ")</h4>" + "<p>" + starSignQualities[astroSign].description + "</p>";
        newBox.appendChild(astroText);

        container.appendChild(newBox);
    }, animationInterval + 100);
}

function setup() {

    setTimeout(function () {
        const datePicker = document.getElementById('date-picker');
        datePicker.style.display = "none";
    }, animationInterval + 100);

}

//https://stackoverflow.com/questions/24172963/jquery-change-method-in-vanilla-javascript
function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener(eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent('on' + eventType, handler);
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