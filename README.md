# Yeoman Ionic Module Generator 
<!--[![Build Status](https://secure.travis-ci.org/zak245/generator-ionicsubgen.png?branch=master)](https://travis-ci.org/zak245/generator-ionicsubgen)-->




## What does it Generate?

This generator was designed for ionic applications creted using the NEW Yeoman Ionic generator.

The present generator creates a complete ready to use module for your Ionic based Hyrid mobile application project

It will generate the following files under the /app/<module name> folder

A controller file: <module name>.controller.js
A router file: <module name>.js
A view file: <module name>.html
A styling file: <module name>.css

Additionally it will refere all the newly created files(except for the view file) in the index.html file


## How to use it ?

First you will have o install the yeoman generator:
```bash
npm install -g yo
```
than you will need to install this ionic module generator

To install generator-ionicsubgen from npm, run:

```bash
npm install -g generator-ionicsubgen
```

Finally, initiate the generator:

```bash
yo ionicSubGen <app name> <module name>
```




## License

MIT
