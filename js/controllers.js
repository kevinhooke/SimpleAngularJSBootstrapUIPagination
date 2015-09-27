var simpleApp = angular.module('simplePaginationApp', ['ui.bootstrap']);

simpleApp.controller('paginationCtrl', function($scope) {

    $scope.numPerPage = 10;
    $scope.currentPage = 1;
    $scope.items = [];
    $scope.maxItems = 50;
    
    //create demo items to paginate
    for(i=0; i<$scope.maxItems; i++){
        $scope.items[i] = { "id" : i, "date" : new Date() };    
    }
    $scope.totalItems = $scope.items.length; 
    $scope.currentPageItems = [];
    
    //move to selected page of items when currentPage value changes
    $scope.$watch("currentPage" , function(){
        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
        var end = begin + $scope.numPerPage;
        $scope.currentPageItems = $scope.items.slice(begin, end);
    });
	
});