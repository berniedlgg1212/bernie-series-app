# Bernie's Series: A TV Series Tracking App

This project is a Single Page Application (SPA) designed for TV series enthusiasts. It allows users to browse a comprehensive list of shows, view details, and add their own reviews for the series they've watched.

**Author:** Bernardo De La Garza Garza
**Hobby:** Watching TV Series

## 🚀 Deployed Application

You can view the live application here: https://bernie-series-app.vercel.app

## 📝 Project Description & Theme

This application was born from a passion for television series. It serves as a personal dashboard to keep track of watched shows and personal ratings, while also providing a clean interface to discover details about them. The main goal is to provide a simple, beautiful, and functional utility for any series lover to organize and review their viewing history.

## 🛠️ Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (A [React](https://reactjs.org/) framework)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first styling approach.
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/) for a set of modern and accessible components.
*   **Form Management:** [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for robust form creation and validation.
*   **Mock API:** [json-server](https://github.com/typicode/json-server) to simulate a backend for storing user reviews.

## 🌐 External API Used

*   **TheMovieDB (TMDB) API:**
    *   **Why it was chosen:** TMDB is the industry standard for movie and TV show data, providing high-quality posters, descriptions, ratings, and an easily searchable database.
    *   **Endpoints Used:**
        *   `api.themoviedb.org/3/search/tv`: Used to find a series by its title and retrieve its ID and basic details.

## ⚙️ Local Installation and Execution Guide

Follow these steps to run the project on your local machine.

### Prerequisites

*   Node.js (v18 or newer recommended)
*   npm (usually comes with Node.js)

