var app = angular.module("myApp", [])
app.controller("myCtrl", function ($scope) {
    $scope.watches = [{
        imgsrc: "images/w1.jpg",
        name: "FOSSIL Watch",
        cost: 35000,
        style: {
            'background': "#aaa"
        }
    },
    {
        imgsrc: "images/w2.jpg",
        name: "FOSSIL WATCH",
        cost: 6500,
        style: {
            'background': "#bbb"
        }
    },
    {
        imgsrc: "images/w3.jpg",
        name: "MINI",
        cost: 15000,
        style: {
            'background': "#ccc"
        }
    },
    {
        imgsrc: "images/w4.jpg",
        name: "Ted Baker",
        cost: 10000,
        style: {
            'background': "#ddd"
        }
    }];
    $scope.cartShow = false;
    $scope.total = 0;
    $scope.cart = [];
    $scope.show = [true];
    $scope.hide = [false];
    $scope.addToCart = function (x) {
      $scope.in = $scope.show.length;
      $scope.show[$scope.in] = true;
      $scope.hide[$scope.in] = false;
      if($scope.cart.includes(x)){
          x.count += 1;
      }else{
          x.count = 1;
          $scope.cart.push(x);
      }
      $scope.total += x.cost;
      $scope.showCart();
    }
    $scope.showCart = function () {
        $scope.cartShow = true;
    }
    $scope.hideCart = function () {
        $scope.cartShow = false;
    }
    $scope.decCount = function (i) {
        if($scope.cart[i].count == 1){
          alert("Item's count cannot be negative or Zero");
        }else{
        $scope.cart[i].count--;
        $scope.total -= $scope.cart[i].cost;
        }
    }
    $scope.incCount = function (i) {
        $scope.cart[i].count++;
        $scope.total += $scope.cart[i].cost;
    }
    $scope.remove = function (i) {
        $scope.total -= $scope.cart[i].cost * $scope.cart[i].count;
        $scope.cart.splice(i, 1);
        $scope.show.splice(i,1);
        $scope.hide.splice(i,1);
    }
    $scope.showBtn = function(i){
      $scope.show[i] = false;
      $scope.hide[i] = true;
    }
    $scope.hideBtn = function(i){
      $scope.show[i] = true;
      $scope.hide[i] = false;
    }
});
