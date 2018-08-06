<p align="center">
  <img src="favicon.png" width="200px" alt="" />
</p>

# React Foundry

React Foundy is a React-Redux starter template project that bundles together amazing
technologies providing an excellent foundation for developing, testing, and deploying
React web apps. Notable features include:
- Uses webpack3 for bundling
- Uses Babel for transpiling jsx and es6 code. 
- Includes all major file type loaders for style, json, images, etc. 
- Minimizes and uglifies release code
- Removes unutilized code and styles from bundle
- Uses autoprefixer for css browser prefixes
- Uses a special method of css bundling for faster and cleaner css injection
- Includes several essential npm libraries for icons, loaders, and basic components
- Eslinter for consist and clean code. Uses modified airbnb style guide with an autofixer
- Unit testing suite using jasmine and karma

# Documentation

## Create a local environment
```
git clone https://github.com/zane-c/React-Foundry.git
cd React-Foundry
```

## Install dependencies
```
npm install
```

## Start development server
Will run a development server with hot-reloading and auto open browser to `localhost:9090`
```
npm start
```

## Start public development server
Will launch a deveopment server on your local area network at `0.0.0.0:9090`
```
npm run public
```

## Lint your code 
Will lint all src files and autofix compatible errors
```
npm run lint
```

## Test your code
Will run all `.spec.jsx` files a single time
```
npm run test
```

## Watch for test changes
Will watch for test changes and auto run all tests again
```
npm run test:watch
```

## Release your bundle
Will generate minified/uglified bundle under the `/dist/` folder
```
npm run release
```

## Deploy your code your remote server
(Must alter `package.json` with your server information`
```
npm run deploy
```


# CLI (beta)

This project also features a command line interface tool used to auto generate boilerplate code to speed up development.
The tool will create basic structured components so that you can jump right in and start writing the important code.

```
npm run forge src/components/new-awesome-component
```
This will generate a new folder `new-awesome-component` in the `src/components` directory. Inside the folder you will find:
```
src
- components
  - new-awesome-component
    - new-awesome-component.controller.jsx
    - new-awesome-component.template.jsx
    - new-awesome-component.styles.scss
    - new-awesome-component.spec.jsx
```


