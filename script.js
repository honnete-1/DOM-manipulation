const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu= document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", function(){
    navMenu.classList.toggle("show");
});

// FEATURE 2: DROPDOWN MENU TOGGLE
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", function(event) {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", function() {
    if (!dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.add("hidden");
    }
});

// CATEGORY FILTER: Filter activity cards when a dropdown option is clicked
const dropdownLinks = dropdownMenu.querySelectorAll("a");
const allCards = document.querySelectorAll(".activity-card");

// Map dropdown label text to data-category values on the cards
const categoryMap = {
    "outdoor": "outdoor",
    "indoor": "indoor",
    "food & dining": "food"
};

dropdownLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const selected = this.textContent.toLowerCase(); // e.g. "outdoor"
        const categoryKey = categoryMap[selected];

        // Update the dropdown button label to show what's active
        dropdownBtn.textContent = this.textContent + " ▼";

        // Show matching cards, hide non-matching ones
        allCards.forEach(function(card) {
            if (categoryKey === card.getAttribute("data-category")) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Close the dropdown after selection
        dropdownMenu.classList.add("hidden");

        // Scroll smoothly down to the cards section
        document.getElementById("activities").scrollIntoView({ behavior: "smooth" });
    });
});

// "All" reset: add a reset option dynamically so user can show all cards again
const resetLi = document.createElement("li");
const resetLink = document.createElement("a");
resetLink.href = "#";
resetLink.textContent = "All Activities";
resetLink.style.fontWeight = "bold";
resetLi.appendChild(resetLink);
dropdownMenu.insertBefore(resetLi, dropdownMenu.firstChild);

resetLink.addEventListener("click", function(event) {
    event.preventDefault();
    allCards.forEach(function(card) {
        card.style.display = "block";
    });
    dropdownBtn.textContent = "Categories ▼";
    dropdownMenu.classList.add("hidden");
});

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

// FEATURE 9: SEARCH FILTER


// Step 1: Select the search input field element
const searchInput = document.getElementById("searchInput");

// Step 2: Add an 'input' event listener to capture typing in real time
searchInput.addEventListener("input", function() {
    
    // Step 3: Convert the typed search text to lowercase so case doesn't matter
    const filterText = searchInput.value.toLowerCase();
    
    // Step 4: Grab all the current list items inside your activity list
    const items = activityList.getElementsByTagName("li");
    
    // Step 5: Loop through each list item to see if it matches
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        
        // Step 6: If the item text contains the search query, show it. Otherwise, hide it.
        if (itemText.includes(filterText)) {
            items[i].classList.remove("hidden");
        } else {
            items[i].classList.add("hidden");
        }
    }
});

// Feature 10 Activity card interaction

const cardButtons = document.querySelectorAll(".cardBtn");

cardButtons.forEach(function(button){
    button.addEventListener("click", function(){

        const activity= this.getAttribute("data-activity");

        const cardLi = document.createElement("li");

        cardLi.textContent = activity;

        activityList.appendChild(cardLi);

        console.log("Added from popoular cards: " + activity);
    });
    
});

// FEATURE 11: HERO BUTTONS SCROLL ACTIONS

// Step 1: Target the parent hero button wrapper and select both buttons inside it
const heroBtnContainer = document.querySelector(".hero-buttons");
const exploreBtn = heroBtnContainer.querySelector("button:first-child");
const addActivityBtn = heroBtnContainer.querySelector("button:last-child");

// Step 2: Add click event listener to the "Explore Activities" button
exploreBtn.addEventListener("click", function() {
    // Select the popular cards section element
    const cardsSection = document.querySelector(".cards-section");
    
    // Step 3: Smoothly scroll the window down to the cards container position
    cardsSection.scrollIntoView({ behavior: "smooth" });
});

// Step 4: Add click event listener to the "Add Activity" button
addActivityBtn.addEventListener("click", function() {
    // Select the dynamic activity list section element
    const listSection = document.querySelector(".list-section");
    
    // Step 5: Smoothly scroll the window down to the list inputs container
    listSection.scrollIntoView({ behavior: "smooth" });
    
    // Step 6: Automatically put the typing cursor focus inside the list input box
    const listInputBox = document.getElementById("itemInput");
    if (listInputBox) {
        listInputBox.focus();
    }
});