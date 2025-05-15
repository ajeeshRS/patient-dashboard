# Patient Dashboard

This README provides instructions to set up the Patient Dashboard project locally.

## Project Structure

This is a monolithic application with:

- **Frontend**: Next.js application
- **Backend**: Node.js API server

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ajeeshRS/patient-dashboard.git
   cd patient-dashboard

   ```

2. **Frontend**:

   ```bash
   cd frontend
   npm install
   npm run dev

   ```

3. **Backend**:

   ```bash
   cd backend
   npm install
   npm run dev

   ```

4. **Setup environment variables**:

   ```bash
   Create a .env file in backend directory and copy paste the below and replace with your secret key

   JWT_SECRET=YOUR_SECRET

   ```

5. **Starting the applications**:

   ```bash
   cd backend
   npm run dev

   cd frontend
   npm run dev

   ```

6. **Accessing applications**:

- Frontend: Open your browser and navigate to http://localhost:3000
- Backend API: Available at http://localhost:5001
