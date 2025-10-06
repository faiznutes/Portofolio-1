# TODO: Fix Portfolio Code Issues

## Step 1: Fix index.html
- [x] Merge the two <main> elements into one valid <main> element.
- [x] Ensure all sections (profile, skills, projects, social) are inside the single <main>.

## Step 2: Update project/js/projects-data.js
- [x] Add data for project2 and project3 with unique titles, descriptions, images, and galleries.
- [x] Ensure images exist or use placeholders.

## Step 3: Fix Paths in HTML Files
- [x] In index.html: Change href="/index.html" to "index.html", href="project/projects.html" to "project/projects.html", etc.
- [x] In about.html: Change href="/index.html" to "../index.html", href="project/projects.html" to "project/projects.html", etc.
- [x] In project/projects.html: Change href="/css/styles.css" to "../css/styles.css", href="/index.html" to "../index.html", etc.
- [x] In project/project-detail.html: Change href="/css/styles.css" to "../css/styles.css", href="/index.html" to "../index.html", etc.

## Step 4: Verify and Test
- [x] Check for any remaining syntax errors or duplicates.
- [x] Ensure all links work correctly.
- [x] Test the burger menu and project navigation.
