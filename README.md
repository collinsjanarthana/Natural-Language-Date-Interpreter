### 🗓️ Language Date Interpreter
A full-stack web application that uses Google’s Gemini API to interpret natural language inputs into structured data, such as calendar dates or product specifications.

### 📌 Project Overview
This application allows users to input natural language queries (e.g., "next Tuesday", "three weeks from now", or even product description requests). The system sends these queries to the Gemini API and returns structured JSON responses. These responses are both displayed to the user and stored in a MySQL database for historical viewing.

### 🚀 Technologies Used

### Frontend

Framework: Angular 19.2.7
CLI Version: Angular CLI 19.2.8
Language: TypeScript
UI: Responsive form and history section using Angular components

### Backend

Language: PHP (or your choice of Java/Node.js if applicable)
API: Google Gemini API
Features: API communication, error handling, JSON formatting

### Database

System: MySQL
Data Stored:
Original user input
Structured JSON response
Timestamps
Containerization

Docker: For containerizing frontend, backend, and database
Docker Compose: To orchestrate services

### Setup Instructions

Prerequisites
Node.js v22.11.0
Angular CLI v19.2.8
Docker & Docker Compose
MySQL Server (used within Docker)

### Step-by-Step

Clone the Repository
git clone https://github.com/yourusername/natural-language-date-interpreter.git
cd natural-language-date-interpreter

### Run with Docker Compose

docker-compose up --build

### Examples of functionality:

### Example 1:
· User input: "Monday in two weeks"

· Application processes this through Gemini API

· JSON response displayed:

{

date: "2025-03-25",

request: "Monday in two weeks"

}

· This response is then stored in the MySQL database

### Example 2:
· User input: "Create a product description for a wireless headphone with noise cancellation, 20-hour battery life, and comfortable ear cups."

· User selects format: "Product Specification"

· Application processes this through Gemini API

· JSON response displayed:

{

"product_name": "Wireless Noise-Cancelling Headphones",

"key_features": [

"Active noise cancellation",

"20-hour battery life",

"Comfortable ear cups"

],

"technical_specs": {

"connectivity": "Wireless",

"battery": "20 hours",

"design": "Over-ear"

},

"original_request": "Create a product description for a wireless headphone with noise cancellation, 20-hour battery life, and comfortable ear cups."

}

### Features

Natural language to structured date conversion

Optional formats for other request types (e.g., product descriptions)

Gemini API integration

History log of previous queries and results

Error handling and response validation

Clean and responsive UI with Angular

Fully containerized using Docker

### Challenges & Resolutions
### Challenges         ### Solutions
Learning Angular       Followed official Angular documentation and tutorials 
Structuring Gemini     responses Created consistent JSON format and validation mechanism 
Dockerizing Angular    Used multi-stage builds to optimize production container

### Acknowledgements
Google Gemini API

Angular Documentation

Docker Community
