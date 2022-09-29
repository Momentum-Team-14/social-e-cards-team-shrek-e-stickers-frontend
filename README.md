# Welcome to the Stickrs App!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

The app has been deployed to: https://team-shrek-e-stickers-frontend.netlify.app/stickrs

With every push to this GitHub repository, the live website will reflect your changes.

## How the App Works:

### Login

Users will be prompted to register and login when first coming to the site. Through the registration form, each user profile is given a unique token for authentication. Through is token, users are allowed to create their own Stickrs! It is important to note that users can only edit and delete their own Stickrs.

### Homepage

After successfully logging in, users are sent to their Homepage. Within the header, the logged-in user's username is displayed, and there is also a button to log out. Beneath the header is a navigation bar where users have the option to go to their Homepage (default), Profile, or create a new Stickr. The main portion of the Homepage displays all of the Stickrs the user can interact with! Using the toggle buttons above, they can choose between seeing their own Stickrs, Stickrs of user's they're following, or all Stickrs. When clicked, the Stickr's unique message is shown. User's can also edit or delete their own Stickrs wherever they are displayed.

### Profile

Here is where the user's Stickrs are publicly displayed by order of earliest created. On the left-hand side there is additional info about the user displayed, such as bio and avatar. Here is where other users can follow each other.

### Create a new Stickr

To create a new Stickr, users are prompted to fill out a form where they can enter their own Title and Message, then choose the image, background color, and font color. When submitted, users are directed back to their Homepage.

We hope you enjoy your Stickrs!
