# TODO: Implement Hidden Login Page for Project Submission

## Step 1: Modify projects-data.js
- [x] Change projectsData to a function getProjectsData() that merges static data with localStorage projects.

## Step 2: Update projects.html
- [x] Modify the script to use getProjectsData() instead of projectsData.

## Step 3: Update project-detail.js
- [x] Modify to use getProjectsData() instead of projectsData.

## Step 4: Create login.html
- [x] Create hidden login page with project submission form including fields for title, tags, thumbnail, description, multiple images with titles, video title and link.

## Step 5: Implement Form Handling
- [x] Add JavaScript to handle form submission, encode images to base64, create project object, and save to localStorage.

## Step 6: Test Functionality
- [ ] Test form submission and verify new projects appear in projects.html and project-detail.html.
