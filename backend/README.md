# Book Manager API

Backend REST API for the Book Manager application, built with Java, Spring Boot, PostgreSQL, JWT Authentication, and Docker.

## Features

* User registration
* User authentication with JWT
* Book CRUD operations
* Book search by title
* PostgreSQL persistence
* Docker support
* Swagger/OpenAPI documentation

---

## Technologies

* Java 21
* Spring Boot
* Spring Security
* Spring Data JPA
* PostgreSQL
* JWT (JJWT)
* Maven
* Docker
* Swagger / OpenAPI

---

## Project Structure

```text
src/main/java/com/example/bookmanager
│
├── auth
│   ├── controller
│   │   └── AuthController.java
│   ├── dto
│   │   ├── LoginRequest.java
│   │   ├── RegisterRequest.java
│   │   └── AuthResponse.java
│   └── service
│       └── AuthService.java
│
├── book
│   ├── controller
│   │   └── BookController.java
│   ├── dto
│   │   ├── BookRequest.java
│   │   └── BookResponse.java
│   ├── entity
│   │   └── Book.java
│   ├── repository
│   │   └── BookRepository.java
│   └── service
│       └── BookService.java
│
├── user
│   ├── entity
│   │   └── User.java
│   ├── repository
│   │   └── UserRepository.java
│   └── service
│       └── CustomUserDetailsService.java
│
├── security
│   ├── JwtService.java
│   ├── JwtAuthenticationFilter.java
│   ├── SecurityConfig.java
|   ├── PasswordConfig.java
│   └── CorsConfig.java
│
└── BookmanagerApplication.java
```

### Package Responsibilities

#### auth

Responsible for user registration, authentication, and JWT token generation.

#### book

Contains all business logic related to books, including CRUD operations and search functionality.

#### user

Contains user persistence and Spring Security integration through UserDetailsService.

#### security

Contains JWT authentication, security configuration, and CORS configuration.

---

## Environment Variables

The application uses environment variables for sensitive configuration.

```env
DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=
JWT_EXPIRATION=86400000
```

---

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Bryanb27/book-manager-desafio-full-stack.git
cd backend
```

### 2. Configure database

Create:

```properties
application-dev.properties
```

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/bookmanager
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.jpa.hibernate.ddl-auto=update

jwt.secret=your-secret
jwt.expiration=86400000
```

### 3. Run PostgreSQL

Make sure PostgreSQL is running locally.

### 4. Start application

```bash
./mvnw spring-boot:run
```

The API will be available at:

```text
http://localhost:8081
```

---

## Running with Docker

Build and start containers:

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

OpenAPI Specification:

```text
http://localhost:8081/v3/api-docs
```

---

## Authentication

Protected endpoints require a JWT token.

Example:

```http
Authorization: Bearer <token>
```

---

## Main Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Books

```http
GET    /books
GET    /books/{id}
POST   /books
PUT    /books/{id}
DELETE /books/{id}
```
