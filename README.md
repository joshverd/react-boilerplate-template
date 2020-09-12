# react-boilerplate-template
A template for building apps with React, TypeScript, and Node.JS

The npm start script runs both the front-end and the back-end at the same time using Concurrently. Nodemon is used to watch for backend changes and automatically recompile/restart the app. Webpack-dev-server automagically recompiles the front-end when it detects a change. In package.json, we have a Nodemon flag set to ignore any changes from './src' so that the back-end does not restart due to a front-end change.

### Directory/File List
 - `./configs` - Configs for each environment (template has development and production, but more can be added if needed) and the `default.config.ts` file, which is the default config file.
    - For example, production uses a production db server while development uses a local db server. The `production.config.ts` file would include the production db connection details but the `development.config.ts` config would include the local db connection details.
    - Any configuration details that should be available to all environments should go in `default.config.ts`. The default configuration file is merged in with the execution environment's configuration file. 
 - `./build` - The final, compiled backend and frontend code goes here
 - `./public` - All files in here are copied to the public build directory. You should expect everything in here to be exposed to the internet once you build.
 - `./routes` - All the backend routes' code
 - `./src` - The source code for the front-end. When the build script is run, these files are compiled and put in to `./public`, then into `./build/public`
 - `./utils` - Utility functions used by the backend
 - `./config.js` - The backend config aggregator

### Running Dev
This will start a server on localhost:3000 and automatically recompile backend/frontend when a change is detected.
```
npm i
npm start
```

### To build for production
When the build command is run, two things happen. First, the frontend (`./src`) is compiled and put in the `/public` directory. Then, the backend is compiled and copied along with `./public` into the `./build` directory. This ensures that the compiled React code is available in the final `./build` directory.
```
npm run build
```

### To run on production
After building, you can run the `./build` directory just like a normal node app.
```
node ./build/app.js
```

### TypeScript setup
I will make changes to the configuration of TypeScript as needed in this project, as I probably have this setup in a very inefficient way.

### Found an issue?
Open a pull request :)
