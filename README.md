# Taquafina Frontend

This directory contains the React frontend application for Taquafina.

## Technologies Used

-   **Framework:** React
-   **Language:** TypeScript
-   **Build Tool:** Vite
-   **Routing:** React Router DOM
-   **API Client:** Axios
-   **Styling:** Tailwind CSS (inferred from `components/ui` and `lib/utils.ts`)
-   **UI Components:** Shadcn/ui (inferred from `components/ui`)

## Installation

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm run preview`

Locally previews the production build.

## Project Structure

-   `public/`: Static assets.
-   `src/`: Main application source code.
    -   `assets/`: Images and other static files.
    -   `components/`: Reusable React components.
    -   `constants/`: Application-wide constants.
    -   `hooks/`: Custom React hooks.
    -   `layouts/`: Layout components.
    -   `lib/`: Utility functions.
    -   `pages/`: Page-level components (views).
    -   `services/`: API service integrations (Axios).
    -   `types/`: TypeScript type definitions.
    -   `utils/`: General utility functions.

## Environment Variables

Create a `.env` file in the `frontend` directory based on `.env.example` (if provided) or the following:

-   `VITE_API_BASE_URL`: The base URL for the backend API (e.g., `http://localhost:8000/api/`).