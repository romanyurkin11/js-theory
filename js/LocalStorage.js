"use strict";

// This type of Storage helps us to remember info even in those cases, when user is leaving the page
// Storage about 5 MB of info


// Step 1
// Set the key with value
localStorage.setItem('number', 5);


// Step 2
/// Get value of key 
console.log(localStorage.getItem('number')) // 5


// Step 3
// Removing the item
localStorage.removeItem('number');



// Step 4
// Removing all items from localStorage
localStorage.clear();