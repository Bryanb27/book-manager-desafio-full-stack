# Book Manager Frontend

Frontend application for the Book Manager project, built with Next.js, TypeScript, Tailwind CSS, and Axios.

The application consumes the REST API provided by the backend service and allows users to:

* Register an account
* Log in using JWT authentication
* Create books
* List books
* Search books by title
* Edit books
* Delete books
* Log out

---

## Technologies

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Axios

---

## Project Structure

```text
frontend
│
├── app
│   ├── page.tsx
│   │
│   ├── login
│   │   └── page.tsx
│   │
│   ├── register
│   │   └── page.tsx
│   │
│   └── books
│       ├── page.tsx
│       │
│       ├── new
│       │   └── page.tsx
│       │
│       └── [id]
│           └── edit
│               └── page.tsx
│
├── services
│   └── api.ts
│
├── types
│   └── book.ts
│
├── public
│
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## Folder Responsibilities

### app/

Contains all application pages using the Next.js App Router.

#### login/

Authentication page.

#### register/

User registration page.

#### books/

Book management pages.

* List books
* Search books
* Delete books

#### books/new/

Create a new book.

#### books/[id]/edit/

Edit an existing book.

---

### services/

Contains integrations with external services.

#### api.ts

Centralized Axios configuration used to communicate with the backend API.

---

### types/

Contains TypeScript interfaces and types shared across the application.

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8081
```

Example for production:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Running Locally

Start development server:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Run production build:

```bash
npm start
```

---

## Authentication

The application uses JWT authentication.

After login:

1. The backend returns a JWT token.
2. The token is stored in Local Storage.
3. Protected requests include:

```http
Authorization: Bearer <token>
```

4. Users are redirected to the Books page after successful authentication.

---

## Main Routes

### Authentication

```text
/login
/register
```

### Books

```text
/books
/books/new
/books/{id}/edit
```

---

## Deployment

The frontend is designed to be deployed on Vercel.

Required environment variable:

```env
NEXT_PUBLIC_API_URL=<backend-url>
```

Example:

```env
NEXT_PUBLIC_API_URL=https://book-manager-api.onrender.com
```
