app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Matt's first page";
  $scope.promo = 'Yolo';
  $scope.products = [{
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014','03','08'),
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  },
                     {
                       name: 'Program or be Programmed',
                       price: 8,
                       pubdate: new Date('2013','08','01'),
                       cover: 'img/program-or-be-programmed.jpg',
                     likes: 0,
                     dislikes: 0},{
                         name: 'Catch 22',
                         price: 22,
                         pubdate: new Date('1967','03','04'),
                     likes: 0,
                     dislikes: 0},{
                           name: '1984',
                           price: 15,
                           pubdate: new Date('1984','05','05'),
                     likes: 0,
                     dislikes: 0}],
    $scope.plusOne = function(index) {
      $scope.products[index].likes += 1
    },
		$scope.minusOne = function(index) {
  		$scope.products[index].dislikes += 1
  }}
		]);
