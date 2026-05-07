# Activity Planner — Interactive Schedule Dashboard

[![HTML5](https://shields.io)](https://mozilla.org)
[![CSS3](https://shields.io)](https://mozilla.org)
[![JavaScript](https://shields.io)](https://mozilla.org)

Activity Planner is a highly interactive single-page web application designed to help users seamlessly organize urban experiences, outdoor adventures, and personal leisure schedules. Built entirely with clean vanilla frontend technologies, this project explicitly demonstrates core front-end architectural principles and modern DOM (Document Object Model) manipulation interfaces to handle complex user inputs and update interface states dynamically without reloading the page.

Live Demo: [https://github.io](https://github.io) 

---

## Table of Contents
- [Features Implemented](#features-implemented)
- [What the Project Demonstrates](#what-the-project-demonstrates)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)

---

## Features Implemented

The application implements all 10 core milestones requested in the assignment parameters:

1. **Navigation Interaction:** Monitored click streams across link arrays to dynamically assign high-visibility hot pink highlights to selected view items, ensuring only one link is active at a time.
2. **Nested Navigation Dropdown:** A toggle-action category selector overlay container nested inside the navigation header bar that opens via click and auto-closes gracefully when clicking away.
3. **Hamburger Menu (Responsive):** On small screens, the standard menu collapses behind a dedicated hamburger icon that toggles navigation drawer visibility using absolute positioning coordinates.
4. **Text Manipulation:** A bidirectional content rendering loop that alternates copy text elements smoothly back and forth inside the introduction paragraph node when triggered.
5. **Light/Dark Mode Engine:** A style toggle system overriding core stylesheet rules from an approachable pastel light background style to a premium deep dark navy configuration.
6. **Input and Display Mirroring:** Live data capture that reads custom string input entries, runs string validation checks for blank text anomalies, and mirrors the user input safely onto the page.
7. **Dynamic Schedule Appending:** An assignment container allowing users to type custom activities and append them instantly as structured list nodes without executing full browser refreshes.
8. **Element Removal & Checking:** An efficient event delegation layer tracking list target coordinates to toggle striking a visual horizontal line (`line-through`) across selected item lists on click.
9. **Search Functionality:** Real-time client-side keyword indexing that reads character entries live to isolate matching schedule list elements and hide non-matching ones.
10. **Activity Cards Interaction:** A grid of 4 pre-curated cards representing activities (Kigali City Tour, Mountain Hiking, Food Experience, Movie Night). Clicking any card's action button automatically extracts its structural metadata and appends it to the dynamic list.

---

## What the Project Demonstrates

This project serves as a practical assignment submission to showcase deep control over JavaScript DOM interaction protocols. It directly demonstrates:
- **Advanced Target Selectors:** Precise identification of document structure targets using `getElementById` and `querySelectorAll`.
- **Event Handling:** Explicit monitoring of client browser inputs using `.addEventListener()` modules.
- **Dynamic Content Injection:** Real-time alteration of layout states and strings using `.textContent` adjustments.
- **Style Manipulation:** Programmatic control of visual presentation variables using `.classList.toggle()`, `.classList.add()`, and direct inline structure modifiers.
- **Node Management Loop:** Client-side component generation and insertion using `.createElement()` and `.appendChild()`.

---

## Tech Stack

- **Markup:** Semantic HTML5 Structure
- **Styling:** CSS3 Responsive Media Queries & Component Breakpoints
- **Logic:** Vanilla JavaScript (ES6+ Document Object Model API Core Elements)

---

## Project Structure

```text
├── index.html       # Single-page core interface file with structural markup
├── style.css        # Responsive stylesheet supporting light/dark color tokens
├── script.js        # Modular vanilla script managing all active event listeners
└── README.md        # Comprehensive assignment documentation file
```

---

## Local Setup

To clone and run this interactive single-page application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**
   ```bash
   cd ActivityPlanner
   ```

3. **Launch the application:**
   - Open the `index.html` file inside any modern browser, or right-click the file inside VS Code and choose **Open with Live Server**.
