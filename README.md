# Workout Tracker
An application that will allow you to save exercises, build and track workouts as well looks at past workouts to see progress.

### Overview
- [Link to the Deployed App](https://wotrackerdc.herokuapp.com/)
- [Link to the BackEnd API](https://trackerbackenddcc.herokuapp.com/)

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | / | Home Page w/ Directory |
GET | /exercises | Index of All Exercises |
POST | /exercises | Exercise Create Route|
GET | /exercises/:id | Show Page for Exercises |
DELETE | /exercises/:id | Delete Route for Exercises |
GET | /history | Workout History Index Route |
GET | /inprogress| Inprogress Workout Route |
POST | /history| Workout Create Route |
GET | /history/:id | Show Route for Workouts |
DELETE | /history/:id | Delete Workout from Database |
PUT | /history/:id | Update Workout Page |


### Built With:
* JavaScript
* React.js
* CSS
* Bootstrap
* Express.js
* MongoDB

### Future Updates:
* Search Bar
* Link to 3rd party API to look up exercises
* Button To edit Exercises in WOrkout Builder
* Authentification for multiple users
* Optimization & Stylization for mobile use
* Different Home Screen
* A page to view exercise stats (i.e. visualizations of strength gain)


## Authors:
- [Dylan Comeau](https://github.com/comeaudc/)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
