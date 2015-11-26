(function(){
  'use strict';

  angular.module('sammLibCoderDojo', [])

  .controller('TheController', function ($scope) {

    $scope.csewBinary = '01000011 01101111 01101101 01110000 01110101 Computer Science Education Week 01110100 01100101 01110010 00100000 01010011 Hour of Code 01100011 01101001 01100101 01101110 01100011 01100101 00100000 01000101 01100100 01110101 01100011 01100001 01110100 01101001 01101111 01101110 00100000 01010111 01100101 01100101 01101011';
    $scope.csew = 'Computer Science Education Week';

    console.log($scope);

  });

})();
