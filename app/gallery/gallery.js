'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryController'
  });
}])

.controller('GalleryController', ['$scope', function($scope) {
  
  $scope.banners = [
    {
      title: 'The Descendants',
      image: 'http://playdiummoviemagic.com/wp-content/uploads/thedescendants.jpg',
      rating: 3,
      category: 'PG'
    },
    {
      title: 'The Walking Death Season 2',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Walking_Dead_S2_Poster.jpg',
      rating: 3,
      category: 'PG'
    },
    {
      title: 'My Week With Marylin',
      image: 'http://www.heyuguys.com/images/2011/11/My-Week-With-Marilyn-UK-Poster.jpg',
      rating: 3,
      category: 'R'
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      image: 'http://images4.fanpop.com/image/photos/17000000/Harry-Potter-and-the-Deathly-Hallows-harry-potter-17012902-800-1274.jpg',
      rating: 3,
      category: 'PG'
    },
    {
      title: 'Tintin',
      image: 'https://getbent57.files.wordpress.com/2012/08/theadventuresoftintin.jpg',
      rating: 3,
      category: 'PG-13'
    }
  ];
  
}]);