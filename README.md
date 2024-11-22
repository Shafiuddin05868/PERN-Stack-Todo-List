# PERN-Stack-Todo-List

This is a Todo List application built with the PERN Stack (PostgreSQL, Express, React, Node.js) and enhanced with **Next.js** and **TypeScript** for a full-stack development experience.

## Features
- Add, edit, and delete tasks
- Persistent data stored in PostgreSQL database
- Server-side rendering (SSR) with Next.js
- TypeScript for type safety

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shafiuddin05868/PERN-Stack-Todo-List.git
   cd PERN-Stack-Todo-List
   ```

2. **Create a `.env` file** inside the server folder
   Create a `.env` file at the root of the project with the following environment variables:

   ```
   DB_HOST=your-database-host
   DB_PORT=your-database-port
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   ```

   Replace the placeholders with your PostgreSQL database details.

3. **Install dependencies**
   Run the following command to install all necessary node modules:
   ```bash
   npm install
   ```

4. **Set up PostgreSQL** from database.sql
   - Make sure your PostgreSQL database is running and configured.
   - You may need to run migrations or set up the database schema as required by the project.

5. **Run the server using `nodemon`** inside the server folder
   To start the server with automatic restarts during development, use `npx` to run `nodemon`:
   ```bash
   npx nodemon index.js
   ```

6. **Run the Next.js development server** inside the client folder
   Start the development server for the Next.js frontend:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.


## Notes

- Make sure the necessary node modules are installed (`npm install`).
- If you haven't already set up the PostgreSQL database, make sure to create it and configure it with the details provided in the `.env` file.
- The project uses **Next.js** for SSR and **TypeScript** for type safety.
- To run the server-side code with `nodemon`, use the command: `npx nodemon index.js` in your project directory.

## Contributing

Feel free to fork this repository and contribute by submitting issues and pull requests. Ensure that you follow best practices for React and Next.js development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This updated version includes instructions for running the server using `npx nodemon index.js`, ensuring the server automatically restarts during development.
