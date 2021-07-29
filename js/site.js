"use strict";

// Controller function
// get the input string value
function getValue() {

    // make sure alert msg is not initially visible
    document.getElementById('alert').classList.add('invisible');

    let userStr = document.getElementById('userString').value;

    let reverseStr = reverseString(userStr);

    displayString(reverseStr);

}

// logic function
// reverse the string value
function reverseString(userStr) {

    let reverseStr = [];

    // reverse string with a decrementing for loop
    for (let i = userStr.length - 1; i >= 0; i--) {
        reverseStr += userStr[i];
        
    }
    return reverseStr;

}

// view function
// display the reversed string value back to the page
function displayString(reverseStr) {

    // write to the page using a template literal
    document.getElementById('msg').innerHTML = `${reverseStr}`;

    // turn on inline alert success message
    document.getElementById('alert').classList.remove('invisible');


}