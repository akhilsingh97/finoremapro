
var app = angular.module("myApp", ["ng-fusioncharts"]);
app.controller('myCtrl', function($scope) {
    $scope.ans1="";
    $scope.ans2="";
    $scope.ans3="";
    $scope.ques1 = "Name of biggest planet";
    $scope.ques2 = "Name of batsmen with most International runs in Cricket";
    $scope.ques3 = "Name of bowler with most International wickets";
    $scope.ques4 = "Name of batsmen with highest individual scores in ODI's";
    $scope.ques5 = "Most successful Wicket-Keeper batsmen";
    $scope.ans11 = "Venus";
    $scope.ans12 = "Jupiter";
    $scope.ans13 = "Earth";
    $scope.ans21 = "Brian Lara";
    $scope.ans22 = "Steve Waugh";
    $scope.ans23 = "Sachin Tendulkar";
    $scope.ans31 = "Mutthaiya Murlidharan";
    $scope.ans32 = "Shane Warne";
    $scope.ans33 = "Anil Kumble";
    $scope.ans41 = "Rohit Sharma";
    $scope.ans42 = "Virat Kohli";
    $scope.ans43 = "Virendra Sehwag";
    $scope.ans51 = "Adam Gilchrist";
    $scope.ans52 = "Kumar Sangakara";
    $scope.ans53 = "MS Dhoni";
    $scope.right=0;
    $scope.wrong=0;
    $scope.IsVisible1 = true;
    $scope.IsVisible2 = false;
    $scope.IsVisible6 = false;


    $scope.ShowDiv2 = function (value) {

                //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible2 = value == "Y";
        $scope.IsVisible1 = false;
        if($scope.ans1 == $scope.ans12){
          $scope.right= $scope.right+1;
        }
        else{
          $scope.wrong= $scope.wrong+1;
        }

    }
    $scope.IsVisible3 = false;

    $scope.ShowDiv3 = function (value) {
                            //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible3 = value == "Y";
        $scope.IsVisible2 = false;
        if($scope.ans2 == $scope.ans23){
          $scope.right= $scope.right+1;

        }
        else{
          $scope.wrong= $scope.wrong+1;
        }
    }
    $scope.IsVisible4 = false;
    $scope.ShowDiv4 = function (value) {
                                            //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible4 = value == "Y";
        $scope.IsVisible3 = false;
        if($scope.ans3 == $scope.ans31){
          $scope.right= $scope.right+1;

        }
        else{
          $scope.wrong= $scope.wrong+1;
        }
    }
    $scope.IsVisible5 = false;
    $scope.ShowDiv5 = function (value) {
                                                            //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible5 = value == "Y";
        $scope.IsVisible4 = false;
        if($scope.ans4 == $scope.ans41){
          $scope.right= $scope.right+1;
        }
        else{
          $scope.wrong= $scope.wrong+1;
        }
    }
$scope.IsVisible6 = false;
    $scope.ClickDiv5= function(value){

      $scope.IsVisible6 = value == "Y";
      $scope.IsVisible5=false;
      if($scope.ans5 == $scope.ans53){
        $scope.right= $scope.right+1;
      }
      else{
        $scope.wrong= $scope.wrong+1;
      }

      $scope.myDataSource = {

      chart: {
          caption: "Check Your Results",
          subCaption: "Number of right and wrong answers",
          theme: "ocean"
      },
      data:[{
          label: "Correct",
          value: $scope.right
      },
      {
          label: "Wrong",
          value: $scope.wrong
      }]
  };


    }

    $scope.myDataSource = {

    chart: {
        caption: "Check Your Results",
        subCaption: "Number of right and wrong answers",
        theme: "ocean"
    },
    data:[{
        label: "Correct",
        value: $scope.right
    },
    {
        label: "Wrong",
        value: $scope.wrong
    }]
};


});
