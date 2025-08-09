# ShelfWise

ShelfWise is a modern **Warehouse Management System (WMS)** designed to help businesses track inventory, manage stock levels, and streamline warehouse operations.  
The application is built with **Vue.js** for the frontend, **Node.js + Express** for the backend, and **PostgreSQL** as the database, communicating via a secure **REST API**.

---

## Tech Stack

**Frontend**

- Vue.js 3 + Vite
- Vue Router (protected routes & role-based access)
- Pinia (state management)
- Axios (REST API calls)
- Vuetify (UI components)
- ESLint + Prettier (code formatting & linting)

**Backend**

- Node.js + Express
- PostgreSQL + Prisma ORM
- JWT Authentication + bcrypt (security)
- dotenv (environment variables)
- Winston (logging)

---

## Features (MVP)

- User Authentication (JWT-based)
- Role-based Access Control (admin, warehouse staff)
- Dashboard with real-time inventory status
- Product Management (add, edit, delete products)
- Stock Movements (incoming & outgoing)
- Search & Filters for inventory
- Protected Routing on frontend

## Roadmap

### Phase 1 - MVP

### Phase 2 - Improvements

Barcode scanning integration
Low-stock alerts (email/notification)
Advanced filtering & reporting
Export data to CSV/Excel
Product categories & locations in warehouse

## Installation

git clone https://github.com/yourusername/shelfwise.git
cd shelfwise

### Frontend

cd frontend
npm install
npm run dev

### Backend

cd backend
npm install
npm run start:dev
