"use strict";

angular.module('<%= appname %>')
/*
<%= moduleName %>: description of the state 

NOTE: if the state has any params they should also be included and described individually
exemple: state/:param1/:param3
 
param1: description 1
param2: description 2
 */
.config(function($stateProvider) {
  $stateProvider

  .state('<%= moduleName %>', {
    url: "<%= routeName %>",
    templateUrl: "/app/<%= moduleName %>/<%= moduleName %>.html",
    controller: '<%= controllerName %>'
  })
});
