'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('codeEnjoy')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('main', {
				abstract: true,
				templateUrl: 'app/modules/main/mainLayout.html'
			})
			.state('main.home', {
				url: '/home',
				templateUrl: 'app/modules/main/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('main.course', {
				url:'/course',
				templateUrl: 'app/modules/main/courses/courseMain.html',
				controller: 'CourseCtrl',
				controllerAs: 'vm'
			})
			.state('main.myClassRoom', {
				url:'/myClassRoom',
				templateUrl: 'app/modules/main/myClassRoom/myClassRoom.html',
				controller: 'MyClassRoomCtrl',
				controllerAs: 'vm'
			})
			.state('main.board', {
				url:'/board',
				templateUrl: 'app/modules/main/board/boardMain.html',
				controller: 'BoardCtrl',
				controllerAs: 'vm'
			});

	}]);
