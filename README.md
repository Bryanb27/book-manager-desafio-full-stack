# Book Manager - Full Stack Application

A full stack book management application developed as a technical challenge.

The project allows authenticated users to manage their personal book collection through a modern web interface and a secure REST API.

---

## Live Demo

Frontend:
https://book-manager-desafio-full-stack-gamma.vercel.app/login

Backend:
https://book-manager-desafio-full-stack-it45.onrender.com

Swagger:
https://book-manager-desafio-full-stack-it45.onrender.com/swagger-ui/index.html

---

## Features

### Authentication

* User registration
* User login
* JWT-based authentication
* Protected routes

### Book Management

* Create books
* List books
* Search books by title
* Update books
* Delete books

### Infrastructure

* Docker support
* PostgreSQL database
* Backend deployment ready
* Frontend deployment ready

---

## Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring Security
* Spring Data JPA
* PostgreSQL
* JWT
* Maven
* Docker
* Swagger/OpenAPI

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Axios

### Database

* PostgreSQL

### Deployment

* Render (Backend + Database)
* Vercel (Frontend)

---

## Project Structure

```text
book-manager-desafio-full-stack
│
├── backend
│   ├── src
│   ├── Dockerfile
│   ├── pom.xml
│   └── README.md
│
├── frontend
│   ├── app
│   ├── services
│   ├── types
│   ├── package.json
│   └── README.md
│
├── docker-compose.yml
│
└── README.md
```

---

## Architecture Overview

```text
Frontend (Next.js)
        │
        │ HTTP Requests
        ▼
Backend (Spring Boot)
        │
        │ JPA
        ▼
PostgreSQL
```

### Authentication Flow

```text
User Login
     │
     ▼
Spring Security
     │
     ▼
JWT Generation
     │
     ▼
Frontend stores token
     │
     ▼
Protected API requests
```

---

## Running the Project

### Clone Repository

```bash
git clone <repository-url>
cd book-manager-desafio-full-stack
```

---

## Backend Setup

Navigate to:

```bash
cd backend
```

Follow the instructions in:

```text
backend/README.md
```

---

## Frontend Setup

Navigate to:

```bash
cd frontend
```

Follow the instructions in:

```text
frontend/README.md
```

---

## Docker

Start containers:

```bash
docker compose up --build
```

Stop containers:

```bash
docker compose down
```

---

## API Documentation

Swagger UI:

```text
http://localhost:8081/swagger-ui/index.html
```

OpenAPI JSON:

```text
http://localhost:8081/v3/api-docs
```

---

## Design Decisions

### JWT Authentication

JWT was chosen because it provides a stateless authentication mechanism, making the API scalable and easy to deploy.

### DTO Layer

DTOs separate API contracts from persistence entities, improving maintainability and security.

### Service Layer

Business rules are isolated from controllers, following common Spring Boot architecture practices.

### PostgreSQL

Chosen for its reliability, SQL compliance, and widespread adoption in production systems.

### Docker

Docker simplifies local development and deployment by providing a consistent execution environment.

---

## Questions

There's still a couple of questions about how the application should work, like:

* Should users be able to view all books in the system, or only the books they have personally added?
* Should the Edit and Delete actions be restricted to the user who created the book, or should all authenticated users be allowed to modify and remove any book?