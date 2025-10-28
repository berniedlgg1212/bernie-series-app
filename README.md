# Bernie's Series: A TV Series Tracking App

This project is a Single Page Application (SPA) designed for TV series enthusiasts. It allows users to browse a comprehensive list of shows, view details, and add their own reviews for the series they've watched.

**Author:** Bernardo De La Garza Garza
**Hobby:** Watching TV Series

## 🚀 Deployed Application

You can view the live application here: **[Paste Your Deployed Link Here (e.g., from Vercel)]**

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

### Step-by-Step Installation

1.  **Clone the Repository**
    ```bash
    git clone [URL of your Git repository]
    cd [repository-folder-name]
    ```

2.  **Install Dependencies**
    This command will install all the necessary packages for the project to run.
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    You need an API key from TheMovieDB. Create a file named `.env.local` in the root of the project and add your key:
    ```
    TMDB_API_KEY=your_tmdb_api_key_here
    ```

4.  **Run the Application (in two terminals)**
    This project requires two processes to run simultaneously: the web application and the mock API server.

    *   **In your first terminal**, start the mock API server:
        ```bash
        npm run db:serve
        ```
        This will start the `json-server` on `http://localhost:3001`, which will handle your review submissions.

    *   **In a second terminal**, start the Next.js development server:
        ```bash
        npm run dev
        ```

5.  **Open the Application**
    Open your browser and navigate to `http://localhost:9002` (or the URL provided by the `npm run dev` command). You should see the application running.
