'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var fs = require('fs');
var cheerio = require('cheerio');
var beautify = require('js-beautify').html;

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
      console.log(chalk.cyan(
" _____ ____  _   _ _____ _____   __  __  ____  _____  _    _ _      ______" +
"\n|_   _/ __ \\| \\ | |_   _/ ____| |  \\/  |/ __ \\|  __ \\| |  | | |    |  ____|"+
"\n  | || |  | |  \\| | | || |      | \\  / | |  | | |  | | |  | | |    | |__   "+
"\n  | || |  | | . ` | | || |      | |\\/| | |  | | |  | | |  | | |    |  __|  "+
"\n _| || |__| | |\\  |_| || |____  | |  | | |__| | |__| | |__| | |____| |____ "+
"\n|_____\\____/|_| \\_|_____\\_____| |_|  |_|\\____/|_____/ \\____/|______|______|"));
    yeoman.generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
    this.argument('module', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
    this.module = _.camelCase(this.module);
    this.ctrlname = _.capitalize(this.module);
  },

  prompting: function () {
    var done = this.async();


    // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the amazing ' + chalk.red('Ionic module') + ' generator!'
    // ));

    var prompts = [{
      name: 'moduleName',
      message: 'What would you like to call your module?',
      default: this.module,
      store   : true
    },
    {
      name: 'routeName',
      message: 'What would you like to call your url Route?',
      default : "/" + this.module,
      store : true
    },
    {
      name: 'controllerName',
      message: 'What ould you like to call your Controller?',
      default: this.ctrlname + 'Ctrl',
      store : true

    }];  


    


    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.moduleName = props.moduleName;
      this.routeName = props.routeName;
      this.controllerName = props.controllerName;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {

        
    this.template('_route.js', 'app/app/' + this.moduleName + '/' +  this.moduleName +'.js')
    this.template('_controller.js', 'app/app/' + this.moduleName + '/' +  this.moduleName +'.controller.js')
    this.template('_view.html', 'app/app/' + this.moduleName + '/' +  this.moduleName +'.html')
    this.template('_css.css', 'app/app/' + this.moduleName + '/' +  this.moduleName +'.css')

    var moduleName = this.moduleName;

    //updating index file

      var $ = cheerio.load(fs.readFileSync('index.html'));
      //styles
      $('link').each( function () {
        if ( $(this).attr('href') == "app/main/main.css" ) {
          $(this).after('<link href="app/' + moduleName + '/' + moduleName + '.css" rel="stylesheet">')
          $(this).after('    ')
          // $(this).after(' \t')
          $(this).after(' \n')

        };
      })

      //scripts
      $('script').each( function () {

        if ( $(this).attr('src') == "app/main/main.js" ) {
          $(this).after('<script src="app/' + moduleName + '/' + moduleName + '.js"></script>')
          $(this).after('    ')
          // $(this).after(' \t')
          $(this).after(' \n')

        };

        if ( $(this).attr('src') == "app/main/main.controller.js" ) {
          $(this).after('<script src="app/' + moduleName + '/' + moduleName + '.controller.js"></script>')
          $(this).after('    ')
          // $(this).after(' \t')
          $(this).after(' \n')

        };



        });


      beautify($.html(), {indent_size : 4 });

      fs.writeFileSync('index.html', $.html());

      console.log("updated the index.html");
    }

    
  },

 
});
