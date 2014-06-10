'use strict';

angular.module('jinglemakerApp')
	.controller('MainCtrl', function ($scope) {
    $scope.bpm = '120';
    $scope.increment = '1/1';

    var oneRow  = '';
    for (var i = 0 ; i < 85 ; i++){
    	oneRow += '<div class="noteCol"></div>';
    }
    $('#track').html(oneRow);

  });
