# Fibonacci Number Generator
The Fibonacci Number Generator is a web application that allows users to generate the first 'n' Fibonacci numbers, where 'n' is an integer provided by the user. The application uses Node.js, Express, and MongoDB on the backend, and React on the frontend.

# Features
+ Users can input an integer 'n' on the homepage.
+ Upon submission, the app calculates and displays the first 'n' Fibonacci numbers on a separate page.
+ The backend stores the calculated Fibonacci numbers in a MongoDB database, avoiding recomputing numbers already calculated.

# Technologies Used
+ Node.js
+ Express.js
+ MongoDB
+ React
+ HTML/CSS

# Installation
1. Clone the repository:
```
git clone https://github.com/neu-mis-info6150-fall2021/final-project-team-5.git
```
2. Install dependencies for the backend:
``` cd Fibonacci_czBiohub/server
npm install
```
3. Install dependencies for the frontend:
```
cd Fibonacci_czBiohub/webapp
npm install
```
4. Start the backend server:
```
cd Fibonacci_czBiohub/server
node server
```
The backend server will run on http://localhost:3001.

5. Start the frontend development server:
```
cd Fibonacci_czBiohub/webapp
npm start
```
The frontend development server will run on http://localhost:3000.
# Usage
1. Open your web browser and go to http://localhost:3000 to access the Fibonacci Number Generator.
2. On the homepage, enter a positive integer 'n' into the input field.
3. Click the "Generate Fibonacci Numbers" button.
4. The app will redirect you to a new page displaying the first 'n' Fibonacci numbers.

# API Endpoints
GET /fibNumber/:n: Used to retrieve/calculate the stored/new Fibonacci numbers for a given 'n'.

# Database Schema
The MongoDB database schema for storing Fibonacci numbers has the following structure:
```
{
  n: Number,       // The value of 'n'
  value: [Number]  // Array containing the first 'n' Fibonacci numbers
}
```
# Screenshots
![Homepage screenshot](https://github.com/SushmitaMaity/Fibonacci_czBiohub/blob/main/Screenshot%202023-08-02%20at%2011.49.38%20AM.png)
![Fibonacci page screenshot](https://github.com/SushmitaMaity/Fibonacci_czBiohub/blob/main/Screenshot%202023-08-02%20at%2011.49.49%20AM.png)

# Contact
If you have any questions or need further assistance, please feel free to contact the project maintainer:

Email: maity.s@northeastern.edu