var app = angular.module("myApp", [])
app.service('SerProv', function(){
  this.total=0;
  this.cart = [];
  this.show = [true];
  this.hide = [false];
  this.cartShow=false;
  this.getWatches = function(){
    this.watches = [{
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
  return this.watches;
}

  // this.getcartShow = function(){
  //    return this.cartShow;
  // }
  //
  // this.getTotal=function(){
  //   return this.total;
  // }
  //
  // this.getCart=function(){
  //   return this.cart;
  // }
  //
  // this.getShow=function(){
  //   return this.show;
  // }
  //
  // this.getHide=function(){
  //   return this.hide;
  // }

  this.addToCart=function(x){
    this.in = this.show.length;
    this.show[this.in] = true;
    this.hide[this.in] = false;
    if(this.cart.includes(x)){
        x.count += 1;
    }else{
        x.count = 1;
        this.cart.push(x);
    }
    this.total += x.cost;
    this.showCart();
     return this.cart;
  }
  this.showCart = function () {
    return this.cartShow = true;
  }
  this.hideCart = function () {
      return this.cartShow = false;
  }

  this.decCount = function (i) {
      if(this.cart[i].count == 1){
        alert("Item's count cannot be negative or Zero");
      }else{
      this.cart[i].count--;
      this.total -= this.cart[i].cost;
      }
      return this.cart;
  }
  this.incCount = function (i) {
      this.cart[i].count++;
      this.total += this.cart[i].cost;
      return this.cart;
  }
  this.remove = function (i) {
      this.total -= this.cart[i].cost * this.cart[i].count;
      this.cart.splice(i,1);
      this.show.splice(i,1);
      this.hide.splice(i,1);
      return this.cart;
  }
});
app.controller("myCtrl", function ($scope, SerProv, $timeout) {
    $scope.watches = SerProv.getWatches();
    $scope.cartShow = SerProv.cartShow;
    $scope.total = SerProv.total;
    $scope.cart = SerProv.cart;
    $scope.show = SerProv.show;
    $scope.hide = SerProv.hide;
    $scope.addToCart = function (x) {
      $scope.cart = SerProv.addToCart(x);
      $scope.show = SerProv.show;
      $scope.hide = SerProv.hide;
      $scope.total = SerProv.total;
      SerProv.showCart();
      $scope.cartShow = SerProv.cartShow;
    }
    $scope.showCart = function () {
        $scope.cartShow =SerProv.showCart();
    }
    $scope.hideCart = function () {
        var myEl = angular.element( document.querySelector( '.show-cart' ) );
        myEl.addClass('hide-cart');
        $timeout(function () {
          $scope.cartShow = SerProv.hideCart();
          myEl.removeClass('hide-cart');
        }, 1000);
    }

    $scope.decCount = function (i) {
      $scope.cart = SerProv.decCount(i);
      $scope.total = SerProv.total;
    }

    $scope.incCount = function (i) {
      $scope.cart = SerProv.incCount(i);
      $scope.total = SerProv.total;
    }
    $scope.remove = function (i) {
      $scope.cart = SerProv.remove(i);
      debugger
      $scope.total = SerProv.total;
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
