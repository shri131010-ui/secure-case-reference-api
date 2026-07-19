# Secure Case Reference Lookup API


live link:-https://secure-case-reference-api.vercel.app/

## Project Overview

Secure Case Reference Lookup API is a RESTful backend application built using **Node.js** and **Express.js** following the **MVC (Model-View-Controller)** architecture.

The application allows users to manage secure case records through REST APIs. It supports creating, retrieving, updating, and deleting case records while ensuring input validation, sanitization, proper error handling, and standardized JSON responses.

---

## Features

* RESTful API architecture
* MVC project structure
* Get all cases
* Get case by ID
* Create a new case
* Update an existing case
* Delete a case
* Input validation middleware
* XSS input sanitization
* Request logger middleware
* Custom 404 middleware
* Global error handler
* Environment variable configuration using `.env`
* Standardized JSON responses
* ESLint configured with zero lint errors

---

## Tech Stack

* Node.js
* Express.js
* JavaScript
* ESLint
* Dotenv
* sanitize-html

---

## Project Structure

```text
secure-case-reference-api/
│
├── controllers/
│   └── caseController.js
│
├── data/
│   └── cases.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── logger.js
│   ├── sanitizeInput.js
│   └── validateCase.js
│
├── routes/
│   └── caseRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## API Endpoints

### Get All Cases

```http
GET /api/cases
```

---

### Get Case By ID

```http
GET /api/cases/:id
```

---

### Create Case

```http
POST /api/cases
```

Request Body

```json
{
  "reference": "CASE1001",
  "owner": "Shruti Gupta",
  "status": "Open"
}
```

---

### Update Case

```http
PUT /api/cases/:id
```

Request Body

```json
{
  "reference": "CASE1001",
  "owner": "Shruti Gupta",
  "status": "Closed"
}
```

---

### Delete Case

```http
DELETE /api/cases/:id
```

---

## JSON Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Case not found"
}
```

---

## Middleware Used

* Validation Middleware
* Input Sanitization Middleware
* Logger Middleware
* 404 Not Found Middleware
* Global Error Handling Middleware

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
```

---

## Installation

```bash
npm install
```

---

## Run Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## API Testing

The APIs were tested using **Postman**.

Tested scenarios include:

* Get all cases
* Get case by ID
* Create new case
* Update existing case
* Delete case
* Invalid ID handling
* Validation errors
* Route not found
* Empty data handling

---

## Project Status

Completed

* MVC Architecture
* CRUD Operations
* Validation
* Sanitization
* Logging
* Error Handling
* Environment Configuration
* ESLint Passed
* Edge Case Testing

---

## Author

**Shruti Gupta**

Training Project – Prodesk IT
