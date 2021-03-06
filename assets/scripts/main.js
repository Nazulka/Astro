// Declaring and initializing variables
var constellationList = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
];  
let heading;

// Function that takes any string and separates it in two halves and inserts it into html to be formatted
const changeTitle =  name => {
    let halfIndex, leftText, rightText;
    if ( name.indexOf(" ") === -1) {
        halfIndex = Math.round(name.length / 2);
        leftText = name.slice(0, halfIndex);
        rightText = name.slice(halfIndex, name.length);
    } else {
        let words = name.split(" ");
        leftText = `${words[0]} `;
        rightText = words[1];
    }
    heading.html(`${leftText}<span class="cursive lowercase">${rightText}</span>`);
}

// Function that creates a heading styled with two different fonts
function twoFontHeading( ) {
    $( '.two-font-heading' ).each(function( ) {
        let headingText = $(this).text();
        heading = $(this);
        changeTitle( headingText );
    });
}

// Append HTML for each of 12 constellation buttons and add a CSS background image
const constellationButtons = ( container, name, nameLwrCase ) => {
    container.append( `
    <div class="col-4 col-sm-2 mb-3 text-center">
    <p class="mb-1 cursive">${ name }</p>
    <button class="graphic-button  ${ nameLwrCase }">
    </button>
    </div>` );
    $( `.${ nameLwrCase }`).css('background-image',`url('assets/images/constellations/${ nameLwrCase }_yellow.PNG')`);
}

// Append HTML for each of 12 zodiac buttons add a CSS background image
const zodiacButtons = ( container, name, nameLwrCase ) => {
    container.append( `
    <div class="col-4 col-sm-2 mb-3 text-center">
    <p class="mb-1 cursive">${ name }</p>
    <button class="graphic-button" id="${ nameLwrCase }">
    </button>
    </div>` );
    $( `#${ nameLwrCase }`).css('background-image',`url('assets/images/zodiac/${ nameLwrCase }_yellowzodiac.PNG')`);
}

// Iterating through constellationList array to create buttons from functions above
const makeGraphicButtons = ( ) => {
    let containerConstellations = $( '.constellation-button-container' );
    let zodiacContainer = $( '.zodiac-button-container' );
    constellationList.forEach( buttonName => {
        let buttonNameLowercase = buttonName.toLowerCase();
        constellationButtons( containerConstellations, buttonName, buttonNameLowercase );
        zodiacButtons( zodiacContainer, buttonName, buttonNameLowercase);
    });
}

// Change backgoround of a zodiac or constellation
const changeGraphic =  name => {
    let zodiac = name.toLowerCase();
    $('.zodiac-sign').html("").css('background-image',`url('assets/images/zodiac/${ zodiac }_yellowzodiac.PNG')`);
    $('.constellation-sign').html("").css('background-image',`url('assets/images/constellations/${ zodiac }_yellow.PNG')`);
}

// Changes text and background when a graphic button is clicked
function buttonFunction( ) {
    $( '.graphic-button').click( function() {
        let name = $( this ).prev().text();
        heading = $( '.model-name' );
        changeTitle( name );
        changeGraphic ( name );
    });
}

// Appends star icons to all star buttons on all pages
function starIcon( ) {
    let starButton = $( '.star-button' );
    starButton.each(function() {
        let buttonValue = $(this).text();
        $(this).html(`<div class="nav-icon"></div>${buttonValue}`);
    });
}

// Calling all functions to style the headings, buttons, create graphic buttons and add functionality to them
twoFontHeading( );
starIcon( );
makeGraphicButtons( );
buttonFunction( );