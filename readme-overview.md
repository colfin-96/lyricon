# Project Overview: LyricOn

This project is an Angular application designed to manage and display song lyrics.

## Core Functionality

The primary purpose of LyricOn is to provide a platform for users to view and manage a collection of songs. Key features include:

*   **Song Display:** Shows song details such as title, subtitle, author, and composer.
*   **Verse Management:** Displays the verses for each song.
*   **Data Storage:** Utilizes Firebase Firestore as the backend database to store and retrieve song information.

## Technical Aspects

The project is built using the following technologies:

*   **Frontend:**
    *   [Angular](https://angular.io/) (version ~13.1.0)
    *   SCSS for styling
    *   [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
*   **Backend & Database:**
    *   [Firebase Firestore](https://firebase.google.com/docs/firestore) for the primary database.
    *   A Node.js server using [Express](https://expressjs.com/) (`server.js`) is present in the repository. Its specific role in conjunction with the Firebase backend (which the Angular app primarily communicates with for song data) might be for auxiliary services or a previous development iteration.
*   **Development Tools:**
    *   [Angular CLI](https://angular.io/cli) for project management and generation.
    *   [Karma](https://karma-runner.github.io) for unit testing.

## Project Structure

A brief overview of key directories:

*   `src/app/`: Contains the core Angular application code, including components, services, and models.
    *   `src/app/home/`: Likely houses the main components for displaying song lists and details.
    *   `src/app/models/`: Defines the data structures used in the application (e.g., `song.model.ts`, `verse.model.ts`).
*   `src/assets/`: Stores static assets such as images, icons (e.g., `lyricon_logo.svg`), and design files.
*   `server.js`: A Node.js Express server.
*   `angular.json`: Angular workspace configuration.
*   `package.json`: Lists project dependencies and npm scripts.

## Data Models

The application uses the following core data models:

*   **`Song`** (`src/app/models/song.model.ts`):
    *   `number`: (number) Identifier for the song.
    *   `title`: (string) The main title of the song.
    *   `subtitle`: (string) Any subtitle for the song.
    *   `author`: (string) The author of the lyrics.
    *   `composer`: (string) The composer of the music.
    *   `verses`: (Verse[]) An array of Verse objects.

*   **`Verse`** (`src/app/models/verse.model.ts`):
    *   `number`: (string) Identifier for the verse (e.g., "1", "Chorus").
    *   `text`: (string) The text content of the verse.

## Setup and Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

### Prerequisites

Ensure you have Node.js and npm/yarn installed.

### Installation

1.  Clone the repository.
2.  Install project dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Development Server (Frontend)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Backend API Server

To run the Node.js Express server (if needed):
```bash
npm run api
```
This will start the API server, typically on `http://localhost:3000/`.

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/current-directory/` directory. Use the `--prod` flag for a production build.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further Help (Angular CLI)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
