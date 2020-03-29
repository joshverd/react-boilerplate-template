# react-scss-barebones-template
A bare-bones template for a ReactJS app (with SASS and Webpack) and an Express backend.

The npm start script runs both the front-end and the back-end at the same time using Concurrently. Nodemon is used to watch for backend changes and automatically restart the app. Webpack-dev-server automagically recompiles the front-end when it detects a change. In package.json, we have a Nodemon flag set to ignore any changes from './src' so that the back-end does not restart due to a front-end change.

### Directory/File List
 - `./routes` - All the backend routes' code
 - `./public` - All files in here are exposed to the public internet when backend server is run
 - `./src` - The source code for the front-end. When the build script is run, these files are compiled and put in to `./public`
 - `./utils` - Utility functions used by the backend
 - `./config.js` - The backend config

### Running Dev
This will start a server on localhost:3000 and automatically recompile everything into bundle files 
```
npm i
npm start
```

### To build for production
This will populate the `./public` directory with the compiled version of `./src`
```
npm run build
```

### Found an issue?
Open a pull request :)
