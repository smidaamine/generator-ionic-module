# Yeoman Ionic Module Generator 
<!--[![Build Status](https://secure.travis-ci.org/zak245/generator-ionicsubgen.png?branch=master)](https://travis-ci.org/zak245/generator-ionicsubgen)-->




## What does it Generate?

This generator was designed for ionic applications creted using the NEW Yeoman Ionic generator.

The present generator creates a complete ready to use module for your Ionic based Hyrid mobile application project

It will generate the following files under the **/app/\<module name\>** folder:
```bash
<module name>
    ├── <module name>.js                 - Routes
    ├── <module name>.controller.js      - Controller 
    ├── <module name>.html               - View
    └── <module name>.css                - Styles
```

### The controller
the content of the controller file:
```bash
"use strict";

angular.module('<app name>')
.controller('ModuleCtrl', function($scope) {

});
```

### The router
the content of the router:
```bash
"use strict";

angular.module('<app name>')
.config(function($stateProvider) {
  $stateProvider
  .state('<module name>', {
    url: "/<module name>",
    templateUrl: "/app/<module name>/<module name>.html",
    controller: 'ModuleCtrl'
  })
});
```

### The view
the content of the view:
```bash

<ion-view view-title="<module name>">
  <ion-content>
	<h1><module name></h1>
  </ion-content>
</ion-view>

```
<module name>.css (empty by default)
 
Additionally it will refere all the newly created files(except for the view file) in the index.html file


## How to use it ?

First you will have o install the yeoman generator:
```bash
npm install -g yo
```
than you will need to install this ionic module generator

To install generator-ionicsubgen from npm, run:

```bash
npm install -g generator-ionic-module
```

Finally, initiate the generator:

```bash
yo ionic-module <app name> <module name>
```
where \<app name\> is the name of the Angularjs app you are orking on
and \<module name\> is the name of the module you want to create

## Author
Djadoun mohamed Abderrezak <dmabderrezak@gmail.com>

## License

MIT

