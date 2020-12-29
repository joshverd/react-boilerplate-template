# react-boilerplate-template
A template for building apps with React, TypeScript, and Node.JS

The npm start script runs both the front-end and the back-end at the same time using Concurrently. Nodemon is used to watch for backend changes and automatically recompile/restart the app. Webpack-dev-server automagically recompiles the front-end when it detects a change. In package.json, we have a Nodemon flag set to ignore any changes from `src/` so that the back-end does not restart due to a front-end change.

### Directory/File List
 - `./configs` - Configs for each environment (template has development and production, but more can be added if needed) and the `default.config.ts` file, which is the default config file.
    - For example, production uses a production db server while development uses a local db server. The `production.config.ts` file would include the production db connection details but the `development.config.ts` config would include the local db connection details.
    - Any configuration details that should be available to all environments should go in `default.config.ts`. The default configuration file is merged in with the execution environment's configuration file.
 - `./build` - The final, compiled backend and frontend code goes here
 - `./public` - All files in here are copied to the public build directory. You should expect everything in here to be exposed to the internet once you build.
 - `./routes` - All the backend routes' code
 - `./src` - The source code for the front-end. When the build script is run, these files are compiled and put in to `./public`, then into `./build/public`
 - `./tests` - Unit tests
    - I need to find a better solution for tests. I don't like having them in a separate folder from the code we need to test, it just doesn't make much sense.
    - One solution is to include a `*.test.ts` file next to each file we want to test. For example, each `utils/*.ts` would be accompanied by a `utils/*.test.ts` file. In the current setup, this would cause the `utils/` folder to become very large, very quick, since each util would require two files.
 - `./types` - All custom typescript types are inside this folder.
    - You can reference any type in this folder like this: `import type Example from 'types/Example';`
 - `./utils` - Utility functions used by the backend
 - `./config.ts` - The backend config aggregator

### Setup
1. Make sure you have node.js installed on your machine.
2. While inside the directory containing this project, run `npm i` to install all required dependencies.
3. Check to see if your IDE supports Typescript natively or if you need to install a package for language support. A huge benefit of Typescript is its amazing language server. Take advantage of it!

### Running Dev
This will start a server on localhost:3000 and automatically recompile backend/frontend when a change is detected.
```
npm i
npm start
```

### To build for production
When the build and test command is run, three things happen concurrently. First, all tests are run. Second, the frontend is compiled. Third the backend is compiled. If any of these commands fail, the command will throw a nonzero exit code. If the command succeeds, the compiled backend and frontend will be in `build/` and `build/public` respectively!  
```
npm run build-and-test
```

### To run on production
After building, you can run the `./build` directory just like a normal node app.
```
node ./build/app.js
```

### TypeScript/Jest setup
I will make changes to the configuration of TypeScript and Jest as needed in this project, as I probably have this setup in a very inefficient way.

### Found an issue?
Open a pull request :)
