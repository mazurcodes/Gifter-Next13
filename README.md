# Gifter

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Description

Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.

The key features of Gifter include:

- Non-registered users can search for wishlists by email
- User registration and login with email
- Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links
- Managing and updating the wishlist

## Demo

Gifter is currently in version 0.9:

- [Demo on Vercel](https://gifter-next13.vercel.app/)

## Agile Board

Check my trello agile board that I use for managing tasks:

- [Trello Gifter Board](https://trello.com/b/9Cu5EkjO/gifter-app)

## Technologies Used

Gifter incorporates a variety of technologies and testing libraries to provide a dynamic and efficient gift-sharing platform. The key technologies and testing libraries used in this project include:

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Firebase Authentication and Firestore](https://firebase.google.com/)
- [React-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)
- [React Hook Form](https://react-hook-form.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)

These technologies, along with the testing libraries, collectively contribute to Gifter's functionality, security, real-time updates, and user-friendly interface. By leveraging these tools, I've managed to ensure the reliability and quality of this application.

---

## Installation

To run Gifter locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/mazurcodes/Gifter-Next13.git
   ```

2. Navigate to the project directory:

   ```shell
   cd gifter-next13
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Set up the environment variables:

   Create a .env file in the root of the project.
   Add the necessary environment variables, such as Firebase API keys and configuration details:

   ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=Here_Goes_Your_Public_FIREBASE_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Here_Goes_Your_Public_FIREBASE_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=Here_Goes_Your_Public_FIREBASE_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Here_Goes_Your_Public_FIREBASE_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=Here_Goes_Your_Public_FIREBASE_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=Here_Goes_Your_Public_FIREBASE_APP_ID
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=Here_Goes_Your_Public_FIREBASE_MEASUREMENT_ID
   ```

5. Run the development server:

   ```shell
   npm run dev
   ```

6. Open your web browser and visit http://localhost:3000 to access Gifter.

---

## Available Scripts

In the project directory, you can run the following scripts:

1. Runs the development server, allowing you to preview the app in development mode.

   ```shell
       npm run dev
   ```

2. Builds the app for production, creating an optimized bundle.

   ```shell
       npm run build
   ```

3. Starts the production server to serve the built app.

   ```shell
       npm start
   ```

4. Runs the linter to check for code style and formatting issues.

   ```shell
       npm run lint
   ```

5. Runs the tests using the vitest testing library.

   ```shell
       npm test
   ```

6. Runs the tests and generates a coverage report using vitest.

   ```shell
       npm run coverage
   ```

---

## Acknowledgments

Special thanks to [Przemek Majewski](https://github.com/emeczku) for his valuable contributions to the development of Gifter. His assistance in identifying and resolving bugs was instrumental in improving the overall appearance and functionality of the application.

---

## License

This project is licensed under the MIT License.
