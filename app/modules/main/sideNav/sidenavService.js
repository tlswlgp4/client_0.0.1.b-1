(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('codeEnjoy')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$otherDependency'];
	// function Name ($http, $otherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {

		var menu = [{
			link: 'home',
			name: 'Home',
			icon: 'home'
		},
		{
			link: 'course',
			name: '강의',
			icon: 'dashboard'
		},
		{
			link: 'myClassRoom',
			name: '내 교실',
			icon: 'class'
		},
		{
			link: 'board',
			name: '게시판',
			icon: 'assignment'
		}];

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
