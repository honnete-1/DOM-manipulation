# Activity Planner — Interactive DOM Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Activity Planner is a fully interactive single-page web application built with vanilla HTML, CSS, and JavaScript. It helps users organize urban experiences, outdoor adventures, and personal leisure activities — all without a single page reload. The project was built to demonstrate core DOM manipulation techniques including dynamic content creation, event handling, real-time filtering, and responsive design.

**Live Demo:** https://dom-manipulation-mu-jet.vercel.app/

---

## Table of Contents

- [Features Implemented](#features-implemented)
- [What the Project Demonstrates](#what-the-project-demonstrates)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Student Info](#student-info)

---

## Features Implemented

1. **Navigation Interaction** — Active link highlighting with only one link active at a time, managed via click event listeners.
2. **Nested Dropdown Menu** — A dropdown nested inside the navbar that opens on click and closes when clicking outside.
3. **Hamburger Menu** — On small screens, a hamburger icon toggles the navigation menu visibility for a responsive experience.
4. **Text Manipulation** — A button alternates paragraph text content between two states using `.textContent`.
5. **Light / Dark Mode** — A toggle button switches between a pastel light theme and a deep dark navy theme by dynamically updating CSS classes and inline styles.
6. **Input and Display** — Captures user input from a text field, validates it, and mirrors the entered value onto the page.
7. **Dynamic List** — Users can type custom activities and append them instantly as new list items using `.createElement()` and `.appendChild()`.
8. **Element Removal** — Clicking a list item toggles a `line-through` style, and a remove button deletes it from the DOM entirely.
9. **Search Functionality** — Real-time keyword filtering that shows matching list items and hides non-matching ones as the user types.
10. **Activity Cards** — A grid of 4 activity cards (Kigali City Tour, Mountain Hiking, Food Experience, Movie Night). Each card has a title, description, and a button that adds the activity to the dynamic list.

---

## What the Project Demonstrates

- **DOM Selectors:** Precise element targeting using `getElementById`, `querySelector`, and `querySelectorAll`.
- **Event Handling:** All interactions driven by `.addEventListener()` — no inline HTML event attributes.
- **Dynamic Content:** Real-time DOM updates using `.textContent`, `.innerHTML`, `.createElement()`, and `.appendChild()`.
- **Style Manipulation:** Visual state changes via `.classList.toggle()`, `.classList.add()`, `.classList.remove()`, and direct style property overrides.
- **Content Filtering:** Client-side search that iterates over list nodes and toggles visibility based on input matches.
- **Responsive Design:** CSS media queries and a hamburger menu ensure the page works across screen sizes.

---

## Tech Stack

- **Markup:** Semantic HTML5
- **Styling:** CSS3 with responsive media queries
- **Logic:** Vanilla JavaScript (ES6+, no frameworks or libraries)

---

## Project Structure

```text
├── index.html     # Single-page interface with all structural markup
├── style.css      # Responsive stylesheet with light/dark color tokens
├── script.js      # All DOM interactions and event listeners
└── README.md      # Project documentation
```

---

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<honnete-1>/DOM-manipulation.git
   ```

2. **Navigate into the project folder:**
   ```bash
   cd DOM-manipulation
   ```

3. **Open in browser:**
   - Open `index.html` directly in any modern browser, or right-click it in VS Code and choose **Open with Live Server**.

---

## Student Info

| Field        | Details                        |
|--------------|-------------------------------|
| Student Name | Honnete Nishimwe               |
| Course       | Web Development / Frontend DOM |
| Assignment   | DOM Manipulation Project       |
