angular.module('ionicApp', ['ionic'])

  .controller('AppCtrl', function ($scope, $ionicModal) {

    $scope.contacts = [
      {name: 'Gordon Freeman'},
      {name: 'Barney Calhoun'},
      {name: 'Lamarr the Headcrab'},
    ];
    $ionicModal.fromTemplateUrl('modal.html', function (modal) {
      $scope.modal = modal;
    }, {
      animation: 'slide-in-up',
      focusFirstInput: true
    });

  })

  .controller('ModalCtrl', function ($scope, $ionicSlideBoxDelegate) {

    $scope.newUser = {};

    $scope.contentSlide1 = "This is some example content for slide 1.";

    $scope.nextSlide = function () {
      $ionicSlideBoxDelegate.next();
    };

    $scope.previousSlide = function () {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.createContact = function () {
      console.log('Create Contact', $scope.newUser);
      $scope.modal.hide();
    };

  });
