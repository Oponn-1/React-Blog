# React js Blog
This is a project to create a blog style application using React.js, a Node.js server, and Cosmic.js content delivery. The purpose is to learn how to use these things, and to build an application that would allow me to manage content on my personal website like a blog. The functionality will be for me to be able to add, edit, and remove entries to the 'portfolio' section of my website as well as the 'projects' section. 

## Package.json scripts
For the purpose of development there are some scripts in the package.json file to be called from the command line (like one start up a development server). These scripts are written with Windows and PowerShell commands because I am working on this on a Windows computer, but if you would like to run this locally, you can change the following scripts:

```json 
  "scripts": {
    "start": "npm run production",
    "production": "PowerShell Remove-Item public/index.html && SET NODE_ENV=production webpack -p && SET NODE_ENV=production babel-node app-server.js --presets es2015",
    "webpack-dev-server": "SET NODE_ENV=development & webpack-dev-server --content-base public/ --hot --inline --devtool inline-source-map --history-api-fallback",
    "development": " SET NODE_ENV=development webpack & npm run webpack-dev-server"
  },
```
  
  For use with Unix commands, you will have to change the "production" script to 
  
  ```javascript
  rm -rf public/index.html && NODE_ENV=production webpack -p && NODE_ENV=production babel-node-app-server.js --presets es2015"
```
  
  and change the "webpack-dev-server" script to 
```javascript
 NODE_ENV=development & webpack-dev-server --content-base public/ --hot --inline --devtool inline-source-map --history-api-fallback
```
