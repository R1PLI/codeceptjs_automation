You should install codeceptJS globally

npm i -g codeceptjs

======================================

For init you codeceptJS json you should enter:
codeceptjs init

=====================================

For method suggestion in your IDE (e.g - Webstorm) - use codeceptjs def

====================================

You should install gulp in order to be able to use the gulp-tasks

To install gulp run these in cmd:
npm install --global gulp-cli
npm install --save-dev gulp

There are few gulp tasks: 

clean - remove all files from 'output' folder
To run 'clean' task install 'del' module - npm install --save-dev gulp del


selenium - start a selenium-standalone server

To run selenium task install 'gulp-exec' module - 
npm install --save-dev gulp-exec  
npm install --save-dev child_process

===================================

You should install selenium standalone server and chromedriver from npm

npm i -g selenium-standalone
selenium-standalone install

To run selenium server use: gulp selenium
