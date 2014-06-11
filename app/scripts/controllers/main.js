'use strict';

angular.module('jinglemakerApp')
	.controller('MainCtrl', function ($scope) {
    $scope.bpm = '120';
    $scope.increment = '1/1';
    $scope.octaves = ['2','3','4','5','6','7','8','9'];
    $scope.keys = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];


    // var oneRow  = '';
    // for (var i = 0 ; i < 145 ; i++){
    // 	oneRow += '<div class="noteCol"></div>';
    // }
    // $('#track').html(oneRow);



  });
