#  Volunteer Hub - CPIT405 Final Project

##  Project Description

**Volunteer Hub** is a Web application that connects volunteers with meaningful opportunities. It enables users to explore, filter, and apply for volunteering tasks through a modern, user-friendly , and safe plateform.

This platform aims to make it easier for volunteers and organizations to connect, using features like smart filters, Google login.

##  Key Features

-  **Explore Opportunities**: Search and filter by title, type, skill, and payment.
-  **Interactive Map**: Displays each opportunity’s location using Leaflet.js.
-  **Application Form**: Modal with prefilled user info and Firebase integration.
-  **Google & Manual Login**: Authentication through Firebase.
-  **Contact Form**: Integrated with a PHP backend for inquiries.
-  **Modern UI**: Responsive design using React components.
-  **News API**: Displays some news about Volunteering.


##  Technologies Used

| Technology        | Description                                           |
|-------------------|-------------------------------------------------------|
| React             | Frontend component-based development                  |
| Firebase          | Firestore database and authentication                 |
| Leaflet.js        | Display interactive maps for opportunity locations    |
| News API          | show some news about volunteering                     |
| PHP               | Handle and store messages from the contact form       |
| CSS / HTML        | Layout and styling                                    |
| JavaScript        | Form logic and dynamic rendering                      |

---

##  Website Structure Highlights

| File                                | Purpose                                                |
|-------------------------------------|--------------------------------------------------------|
| `Explore.jsx`                       | Main page to display and filter volunteer roles        |
| `Login.jsx`                         | Manual and Google-based login                          |
| `Signup.jsx`                        | Manual signup and save to Firebase                     |
| `VolunteerFormModal.jsx`           | Modal with form to apply to opportunities              |
| `submit_contact.php`               | Saves contact form messages to a text file             |

---


##  Pages Overview

Below is a detailed explanation of each page in our platform and the technologies or logic used in each:
We aim to show how every part of the project was built and how we applied the required features.

1- Homepage 

On the **Homepage**, we showcased the **key features of our volunteering platform** in a clear and engaging layout.
We also integrated an **external API** to display the latest volunteering news, aiming to **encourage users to register and engage** by browsing relevant and inspiring content.

<img width="948" alt="image" src="https://github.com/user-attachments/assets/003e5b32-3d4c-44ef-9578-89cbbdb434cc" />

2- Expolre Opertinituse Page
After Pressing on Browse Opportunities, all available Opportunities are displyed.




## ✅ Project Rubric Mapping 

### 1️ HTML Structure
We used valid, semantic HTML5 elements inside React (e.g., `<header>`, `<nav>`, `<section>`, `<form>`, `<footer>`) ensuring a logical document flow and good accessibility.

### 2 CSS Styling
The project applies external CSS with a consistent color palette, gradients, rounded corners, and modern UI design, using both flexbox(header, nav ul) and grid(opportunities-list...) for layout and responsive behavior. Further more, Media queries ensure the site adapts well to mobile, tablet, and desktop screen sizes, maintaining a usable and visually appealing interface across devices.

### 3 JavaScript Functionality
We implemented interactive features using JavaScript and React, such as form submission handling, conditional rendering, and dynamic updates based on user actions.

### 4 User Event
We used User Events to make the site interactive, like clicking Browse Opportunities to show more content, opening modals with Volunteer Now, hover effects on buttons, and handling login form submissions.

### 5 React Components
The app is divided into reusable React components (like `Header`, `HeroSection`, `LoginForm`, `OpportunityCard`), each handling its own logic and UI, improving modularity and maintainability.

### 6 Prop Components
We used props in our project to pass data between components, like sending profile information (name, email, etc.) from the parent to child components and handling form data in VolunteerFormModal.jsx. 

### 7 State Management
We used state management (with useState) to track and update dynamic data like user profiles and form inputs, making sure the UI responds correctly when data changes.

### 8 Routing and Navigation
We implemented routing using React Router to smoothly navigate between pages like Home, Explore, Profile, and Login without reloading the whole app.

### 9 API Integration (if applicable)
 We integrated external APIs (via `fetch` or `axios`) to have smooth login & signup, Interactive Map, and News.

### 10 Accessibility (A11y)
We ensured accessibility by using descriptive `alt` text, proper heading levels, sufficient color contrast, keyboard-friendly navigation, and semantic roles where appropriate.

### 11 Deployment
The project is deployed on GitHub Repo.

## Extra

### PHP
We used PHP to store the users’ submitted questions in a file called Contact Us, allowing us to save and manage user inquiries effectively from the frontend form.

### Database
We used a database to store and manage user data, including login details, submitted forms, and volunteering opportunities, making the website dynamic and up-to-date.
