## Getting Started
* [CodeceptJS](http://codecept.io/)
You should install codeceptJS globally
```
npm i -g codeceptjs
```
### Installing codeceptJS
For init you codeceptJS json you should enter:
```
codeceptjs init
```
### Method suggestion in IDE
For method suggestion in your IDE (e.g - Webstorm)
```
codeceptjs def
```
### Gulp.js
* [gulp](http://gulpjs.com/)
You should install gulp in order to be able to use the gulp-tasks

To install gulp run these in cmd:
```
npm install --global gulp-cli
```
```
npm install --save-dev gulp
```

There are few gulp tasks: 

*clean* - remove all files from 'output' folder

Install del module:
```
npm install --save-dev gulp del
```

*selenium* - start a selenium-standalone server

To run selenium task install 'gulp-exec' module - 
```
npm install --save-dev gulp-exec  
```
```
npm install --save-dev child_process
```
### Selenium standalone server

You should install selenium standalone server and chromedriver from npm
```
npm i -g selenium-standalone
```
```
selenium-standalone install
```
To run selenium server use
```
gulp selenium
```
