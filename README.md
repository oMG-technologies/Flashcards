# Flashcard - app

When you open the application. The user see the login panel and may set the input box (username and password). Identified is possible (with API and JWT tokens). Then backend checks if the user and password match, the user will be automatically transferred on the main application. Application includes protection for a page. The rendering component will check whether the localstorage item already has the token item? If yes, the route will continue on the destination page.Otherwise, react will call the Redirect component to redirect to the login page.

If user want to create account, that is possible after press the button. After that user see three input box to set up your account.

After registration the backend sent the verify massage on email.

After starting the application, you can display the dashboard and set language to learn and how many words you want to learn in one session. When done, hit the score button to view your achievements.

If you want to check. Click the link: https://flip-cards-language.herokuapp.com/ wait a few minutes for the server to stand up or you might to download project on yours PC. Open the terminal and install packages:

1. Open project file
2. npm install
3. npm start
4. Open the browsers at http://localhost:3000.

React application using:

Frontend: React Hooks ( useState, useEffect, useContext ) React Router, JavaScript ES6, SCSS.

Backend: Django REST framework