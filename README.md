#  Volunteer Hub - CPIT405 Final Project

##  Project Description

**Volunteer Hub** is a web application that connects volunteers with meaningful opportunities. It enables users to explore, filter, and apply for volunteering tasks through a modern, user-friendly interface.

This platform aims to make it easier for volunteers and organizations to connect, using features like smart filters, Google login, and email notifications.

##  Key Features

-  **Explore Opportunities**: Search and filter by title, type, skill, and payment.
-  **Interactive Map**: Displays each opportunity’s location using Leaflet.js.
-  **Application Form**: Modal with prefilled user info and Firebase integration.
-  **Google & Manual Login**: Authentication through Firebase.
-  **Email Confirmation**: Sent automatically to volunteers using EmailJS.
-  **Contact Form**: Integrated with a PHP backend for inquiries.
-  **Modern UI**: Responsive design using React components.
-  **Deployment**: Live using GitHub Pages.


##  Technologies Used

| Technology        | Description                                           |
|-------------------|-------------------------------------------------------|
| React             | Frontend component-based development                  |
| Firebase          | Firestore database and authentication                 |
| Leaflet.js        | Display interactive maps for opportunity locations    |
| EmailJS           | Send confirmation emails from frontend                |
| PHP               | Handle and store messages from the contact form       |
| CSS / HTML        | Layout and styling                                    |
| JavaScript        | Form logic and dynamic rendering                      |

---

##  File Structure Highlights

| File                                | Purpose                                                |
|-------------------------------------|--------------------------------------------------------|
| `Explore.jsx`                       | Main page to display and filter volunteer roles        |
| `Login.jsx`                         | Manual and Google-based login                          |
| `Signup.jsx`                        | Manual signup and save to Firebase                     |
| `VolunteerFormModal.jsx`           | Modal with form to apply to opportunities              |
| `sendEmail.js`                      | Sends confirmation email using EmailJS                 |
| `submit_contact.php`               | Saves contact form messages to a text file             |

---

## 📚 Course Requirements Coverage

| Requirement                          | Implemented In                                         |
|--------------------------------------|--------------------------------------------------------|
|  HTML5                             | All React components use valid semantic HTML           |
| External CSS                      | `App.css` + component-level styles                     |
|  JavaScript Validation             | `Signup.jsx`, `Login.jsx`, and form input checks       |
|  JSON Used in HTML                 | Fetched Firebase data rendered via JSX                 |
|  Reusable Components               | Navbar, Footer, Modals, Cards                          |
|  API using Fetch (AJAX)           | PHP backend, EmailJS, optional: LibreTranslate         |
|  Routing                           | `react-router-dom` for navigation                      |
|  Deployment                        | Project deployed on GitHub Pages                       |
|  Accessibility                     | Inputs, labels, alt text, clean tab order              |
|  README.md                         | ✔ This file                                            |


##  Pages Overview

Below is a detailed explanation of each page in our platform and the technologies or logic used in each:
We aim to show how every part of the project was built and how we applied the required features.

1- Homepage 

On the **homepage**, we showcased the **key features of our volunteering platform** in a clear and engaging layout.
We also integrated an **external API** to display the latest volunteering news, aiming to **encourage users to register and engage** by browsing relevant and inspiring content.

<img width="948" alt="image" src="https://github.com/user-attachments/assets/003e5b32-3d4c-44ef-9578-89cbbdb434cc" />

2- Expolre Opertinituse Page
After Prressing on Browse Opportunities or Press Explore all avalibal  Opportunities



## ✅ Project Rubric Mapping (13 Elements)

### 1️⃣ HTML Structure
We used valid, semantic HTML5 elements inside React (e.g., `<header>`, `<nav>`, `<section>`, `<form>`, `<footer>`) ensuring a logical document flow and good accessibility.

### 2️⃣ CSS Styling
The project applies external CSS with a consistent color palette, gradients, rounded corners, and modern UI design, using both flexbox and grid for layout and responsive behavior.

### 3️⃣ Responsive Design
Media queries ensure the site adapts well to mobile, tablet, and desktop screen sizes, maintaining a usable and visually appealing interface across devices.

### 4️⃣ JavaScript Functionality
We implemented interactive features using JavaScript and React, such as form submission handling, conditional rendering, and dynamic updates based on user actions.

### 5️⃣ React Components
The app is divided into reusable React components (like `Header`, `HeroSection`, `LoginForm`, `OpportunityCard`), each handling its own logic and UI, improving modularity and maintainability.

### 6️⃣ State Management
We used React’s `useState` and props to manage component state, control user inputs, display dynamic content, and maintain a smooth user experience without unnecessary page reloads.

### 7️⃣ Routing (if applicable)
The project optionally uses React Router (or similar) to handle navigation between pages or sections, ensuring seamless transitions without full-page reloads.

### 8️⃣ API Integration (if applicable)
Where needed, we integrated external APIs (via `fetch` or `axios`) to pull live data into the app — such as volunteer opportunities or user details — and render it dynamically.

### 9️⃣ Accessibility (A11y)
We ensured accessibility by using descriptive `alt` text, proper heading levels, sufficient color contrast, keyboard-friendly navigation, and semantic roles where appropriate.

### 🔟 Performance Optimization
We optimized asset sizes (images, CSS), followed best practices for component rendering, and structured the project to minimize unnecessary re-renders and improve load speed.

### 11️⃣ Code Quality & Best Practices
The project code is well-organized, with clear naming conventions, consistent formatting, reusable logic, and comments explaining key parts — making it easy to maintain and expand.

### 12️⃣ Version Control (Git)
We used Git for tracking changes, maintaining a clear commit history, branching (if used), and pushing the project to a public or private repository for review.

### 13️⃣ Deployment & Hosting
The project is deployed using services like Netlify, Vercel, or GitHub Pages, ensuring it’s publicly accessible and shareable, with a live link for demonstration and testing.

