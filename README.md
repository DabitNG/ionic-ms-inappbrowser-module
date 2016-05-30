# Ionic MS InAppBrowser Module
###### Menu module for [Ionic module structure app](https://github.com/DabitNG/ionic-ms-starter)

### Features
This module enables to open URLs in device browser

### Installing module
1. `https://github.com/DabitNG/ionic-ms-inappbrowser-module`
2. `cordova plugin cordova-plugin-inappbrowser`
2. Extract and place in-app-browser folder into www/modules.
2. Go to module-injector.js file under www/modules/main and add `in-app-browser` dependency.
3. (If not ussing Gulp) Add the following scrips after module-injector.js in your index.tml

  ```
  <script src="modules/in-app-browser/module.js"></script>
  <script src="modules/in-app-browser/js/in-app-browser.ctrl.js"></script>
  ```
  
4. Place the following code into your template's `<ion-content>`
  
  ```
  <div ng-controller="InAppBrowserCtrl">
    <button ng-click="sysBrowser("path/to/destiny")">System browser</button>;
    <button ng-click="blankBrowser("path/to/destiny")">Blank browser</button>;
    <button ng-click="selfBrowser("path/to/destiny")">Self browser</button>;
  </div>
  ```

### Support or Contact
Having trouble with this module? Contact with [autor](https://github.com/DabitNG)
