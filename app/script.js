// Code goes here
angular.module('myApp',['ui.router','ui.grid','chart.js'])
 .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/Home");
  //
  // Now set up the states
  $stateProvider
    //Home and its child Navigation states 
    .state('Home', {
      url: "/Home",
      templateUrl: "Home.html",
      controller:'menucontroller'
    })
    .state('Home.HomeGrid', {
      url: "/HomeGrid",
      templateUrl: "HomeGrid.html",
      controller:'MainCtrl'
    })
    .state('Home.HomeTable', {
      url: "/HomeTable",
      templateUrl: "HomeTable.html",
      controller:'MainCtrl'
    })
    .state('Home.HomeForm', {
      url: "/HomeForm",
      templateUrl: "HomeForm.html",
      controller:'menucontroller'
    })
    .state('Home.HomeButtons', {
      url: "/HomeButtons",
      templateUrl: "HomeButtons.html",
      controller:'menucontroller'
    })
    .state('Home.HomeChart', {
      url: "/HomeChart",
      templateUrl: "HomeChart.html",
      controller:'chartController'
    })
    //learn and its child Navigation states 
    .state('Learn', {
      url: "/Learn",
      templateUrl: "Learn.html",
      controller:'menucontroller'
    }).state('Learn.LearnGrid', {
      url: "/LearnGrid",
      templateUrl: "HomeGrid.html",
      controller:'MainCtrl'
    })
    .state('Learn.LearnTable', {
      url: "/LearnTable",
      templateUrl: "HomeTable.html",
      controller:'MainCtrl'
    })
    .state('Learn.LearnForm', {
      url: "/LearnForm",
      templateUrl: "HomeForm.html",
      controller:'MainCtrl'
    })
    .state('Learn.LearnButtons', {
      url: "/LearnButtons",
      templateUrl: "HomeButtons.html",
      controller:'MainCtrl'
    })
    .state('Learn.LearnChart', {
      url: "/LearnChart",
      templateUrl: "HomeChart.html",
      controller:'chartController'
    })
    
    
     .state('Develop', {
      url: "/Develop",
      templateUrl: "Develop.html",
      controller:'menucontroller'
    })
     .state('Discuss', {
      url: "/Discuss",
      templateUrl: "Discuss.html",
      controller:'menucontroller'
    })
    
})
 
 .controller('menucontroller', function($scope){
      $scope.homeMenuItems = [
          {'item':"HomeGrid"},
          {'item':"HomeTable"},
          {'item':"HomeForm"},
          {'item':"HomeButtons"},
          {'item':"HomeChart"}
      ];
      
      $scope.learnMenuItems = [
          {'item':"LearnGrid"},
          {'item':"LearnTable"},
          {'item':"LearnForm"},
          {'item':"LearnButtons"},
          {'item':"LearnChart"}
      ];
      
      $scope.developMenuItems = [
          {'item':"DevelopGrid"},
          {'item':"DevelopTable"},
          {'item':"DevelopForm"},
          {'item':"DevelopButtons"},
          {'item':"DevelopChart"}
      ];
      
      $scope.discussMenuItems = [
          {'item':"DiscussGrid"},
          {'item':"DiscussTable"},
          {'item':"DiscussForm"},
          {'item':"DiscussButtons"},
          {'item':"DiscussChart"}
      ];
 }).controller('MainCtrl', ['$scope', function ($scope) {
 
  $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
   ];
   
}]).controller("chartController", function ($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
