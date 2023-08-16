# portfolio
My personal porfolio


Template following "React Project Tutorial - Build A Portfolio Website w/ Advanced Animations" by freeCodeCamp.org on YT



# Deploy to Github Pages
`npm i gh-pages --save-dev`
Add homepage and scripts to the package.json 
```  
    "homepage": "https://bhughesbrauner.github.io/portfolio",
    ...
    "scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    ...
```
Run `npm run deploy`
Ensure that Github Pages is setup to point to the gh-pages 