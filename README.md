# JobFinder

JobFinder is a React-based job listing application that displays job information in a card layout.  
This project demonstrates React component structure, API-based job listing, reusable components, and GitHub workflow using feature branches and pull requests.

---

## Project Features

- Display job listings
- JobCard component for job details
- Loader component for loading state
- Dynamic list rendering using React map()
- Separate CSS styling
- Feature branch workflow
- Pull Request creation

---

## Technologies Used

- React.js
- JavaScript (ES6)
- CSS
- Vite
- Git & GitHub

---

## Project Structure

JobFinder
│
├── src
│   ├── components
│   │   ├── JobCard.jsx
│   │   ├── JobList.jsx
│   │   └── Loader.jsx
│   │
│   ├── services
│   │   └── Jobservice.js
│   │
│   ├── styles
│   │   ├── Jobcard.css
│   │   └── Joblist.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md

---

## Installation

Clone the repository

git clone https://github.com/shonimavipin/JobFinder.git

Navigate to the project folder

cd JobFinder

Install dependencies

npm install

Run the project

npm run dev

---

## Git Workflow

### 1. Clone the Remote Repository

git clone https://github.com/shonimavipin/JobFinder.git

---

### 2. Create Feature Branch

git checkout -b feature-loader

---

### 3. Create Loader Component

Example Loader component used to show loading state.

Loader.jsx

import React from "react";

function Loader(){
  return(
    <div className="loader">
      Loading jobs...
    </div>
  )
}

export default Loader;

---

### 4. Commit Changes

git add .
git commit -m "Added Loader component"

---

### 5. Push Branch to GitHub

git push origin feature-loader

---

### 6. Create Pull Request

Go to GitHub repository.

Click **Compare & Pull Request**

Add title and description.

Create Pull Request.

---

### 7. Merge Pull Request

Merge feature branch into main or joblist branch.

---

## Example Commit History

Added Loader component  
Updated job list UI  
Added README documentation

---

## Author

Shonima Vipin

---

## License

This project is created for learning and educational purposes..
