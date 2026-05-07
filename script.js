const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu= document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", function(){
    navMenu.classList.toggle("show");
})

const navLinks= document.querySelectorAll(".nav-menu .nav-link")
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        
        // Step 3: Find the old active link and strip the active class off it
        const currentActive = document.querySelector(".nav-link.active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }
        
        // Step 4: Add the active class to the link the user just clicked
        this.classList.add("active");
    });
});


// FEATURE 4: TEXT MANIPULATION


// Step 1: Select the text paragraph and the button elements
const introText = document.getElementById("introText");
const changeTextBtn = document.getElementById("changeTextBtn");

// Step 2: Add a click event listener to the button
changeTextBtn.addEventListener("click", function() {
    
    // Step 3: Check current text content and swap it out conditionally
    if (introText.textContent.includes("stay organized")) {
        introText. textContent = "Great choices! Your schedule is looking productive and well-planned already.";
    } else {
        introText.textContent = "Planning activities helps people stay organized and productive.";
    }
});


// FEATURE 5: DARK MODE TOGGLE

// Step 1: Select the dark mode toggle button
const themeBtn = document.getElementById("themeBtn");

// Step 2: Add click event listener to the button
themeBtn.addEventListener("click", function() {
    
    // Step 3: Toggle the 'dark-mode' class on the body tag
    document.body.classList.toggle("dark-mode");
    
});

// FEATURE 6: INPUT DISPLAY

// Step 1: Select the input, button, and display paragraph elements
const nameInput = document.getElementById("nameInput");
const displayBtn = document.getElementById("displayBtn");
const displayText = document.getElementById("displayText");

// Step 2: Add click event listener to the display button
displayBtn.addEventListener("click", function() {
    
    // Step 3: Get the text value typed by the user and clear outer spaces
    const typedValue = nameInput.value.trim();
    
    // Step 4: Validate and update the paragraph text on screen
    if (typedValue === "") {
        displayText.textContent = "Please enter an activity name first!";
        displayText.style.color = "#db2777"; /* alert pink error color */
    } else {
        displayText.textContent = "You entered: " + typedValue;
        displayText.style.color = ""; /* resets color back to theme defaults */
        nameInput.value = ""; /* clear input line for next entry */
    }
});

// FEATURE 7: DYNAMIC LIST

// Step 1: Select the list section elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const activityList = document.getElementById("activityList");

// Step 2: Add click event listener to the add button
addItemBtn.addEventListener("click", function() {
    
    // Step 3: Get the text value from the input field
    const itemText = itemInput.value.trim();
    
    // Step 4: Validate that it is not empty
    if (itemText !== "") {
        
        // Step 5: Create a brand new li element
        const newLi = document.createElement("li");
        
        // Step 6: Assign the typed text as the content of the new li
        newLi.textContent = itemText;
        
        // Step 7: Append the new li directly onto your existing ul list
        activityList.appendChild(newLi);
        
        // Step 8: Clear out the input field box for the next item entry
        itemInput.value = "";
        
    } else {
        alert("Please type a new activity to add it to your list!");
    }
});

// 
// FEATURE 8: TOGGLE DONE (STRIKE THROUGH)
// 
activityList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        // Toggle text strike-through on and off directly on the item
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
            event.target.style.opacity = "1";
        } else {
            event.target.style.textDecoration = "line-through";
            event.target.style.opacity = "0.5"; /* dims the item slightly */
        }
    }
});




