# Performance Engineering Lab

A beginner-friendly MERN project to demonstrate performance optimization techniques like caching, debouncing, and throttling.

## Concepts Covered
- Caching
- Debouncing
- Throttling

## Project Structure
- `client/` (React + Vite)
- `server/` (Node.js + Express)
- `concepts/` (Pure JS implementations)

## Steps to Run

### 1. Install dependencies
- Backend: `cd server && npm install`
- Frontend: `cd client && npm install`

### 2. Run the server
- `cd server && node server.js`

### 3. Run the client
- `cd client && npm run dev`

### 4. Open the app
- Visit `http://localhost:5173` in your browser

## Caching Demo
- Click "Fetch User" to call the API (simulates a slow response)
- Click again to see instant response from cache
- Console logs show whether data is from API or cache

---

This project is designed for teaching and demonstration purposes. Code is clean, minimal, and easy to extend.
