var myApp=angular.module('initial',['ngRoute'])
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/cursos',{
    templateUrl:'views/cursos.html',
    })
    .when('/blog',{
    templateUrl:'views/blog.html',
    })
    .when('/tienda',{
    templateUrl:'views/tienda.html',
    })
    .when('/contacto',{
    templateUrl:'views/contacto.html',
    })
    .otherwise({
    redirectTo:'/',
        templateUrl:'views/header.html'
    });
    
}]);



