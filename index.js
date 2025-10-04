const http = require('http');

// index.js

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f9;
                    color: #333;
                }
                header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 1rem 0;
                    text-align: center;
                }
                section {
                    padding: 2rem;
                    text-align: center;
                }
                .button {
                    display: inline-block;
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <section>
                <p>Hello! I'm [Your Name], a passionate developer.</p>
                <p>Feel free to explore my work and get in touch!</p>
                <a href="#contact" class="button">Contact Me</a>
            </section>
            <section id="contact">
                <h2>Contact Me</h2>
                <p>Email: your.email@example.com</p>
                <p>Phone: +123 456 7890</p>
            </section>
            <script>
                document.querySelector('.button').addEventListener('click', () => {
                    alert('Thank you for your interest! Feel free to reach out.');
                });
            </script>
        </body>
        </html>
    `);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});