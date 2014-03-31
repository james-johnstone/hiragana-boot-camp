'use strict';

hiraganaApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Hiragana Boot Camp',
            date: '27/03/2014'
        };
    }
);