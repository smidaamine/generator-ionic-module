"use strict";

angular.module('<%= appname %>')

.config(function($stateProvider) {
  $stateProvider

  .state('<%= moduleName %>', {
    url: "<%= routeName %>",
    templateUrl: "/app/<%= moduleName %>/<%= moduleName %>.html",
    controller: '<%= controllerName %>'
  })
});
