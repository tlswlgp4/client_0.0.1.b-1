(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the app
	 */

	angular
		.module('codeEnjoy')
		.controller('CourseCtrl', Course);

	Course.$inject = ['homeService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Course(homeService, $location) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, codeEnjoy!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

		//vm.booleanOfResetStart = false;
		vm.checkRecentCourse = true;
		//vm.checkRecentCourse = false;

		vm.recentImage = 'app/assets/images/coursesImage/java.png';

		vm.ResultOfCourses = {
			ProfessorId:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
			courseName:"jQuery",
			courseSummary:"본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
			id:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
			introductionOfCourse:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		};


		vm.ratioOfCourse = 94.0;

		vm.possibleSubjects = [
			{
				courseID : "adafd531-90de-11e6-99eb-3fed8dc5eb25",
				courseSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				introductionOfCourse:"JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"python.png",
				professorName:"문성훈",
				subjectName:"JAVA",
				subjectSummary:""
			},
			{
				courseID : "adafd531-90de-11e6-99eb-3fed8dc5eb25",
				courseSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				introductionOfCourse:"JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"css.png",
				professorName:"문성훈",
				subjectName:"JAVA",
				subjectSummary:"본 강의는 크게 2가지에 초점을 맞추고 있습니다. JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다."
			},
			{
				courseID : "adafd531-90de-11e6-99eb-3fed8dc5eb25",
				courseSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				introductionOfCourse:"JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"jquery.png",
				professorName:"문성훈",
				subjectName:"JAVA",
				subjectSummary:"본 강의는 크게 2가지에 초점을 맞추고 있습니다. 본 강의는 크게 2가지에 초점을 맞추고 있습니다. JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다."
			},
			{
				courseID : "adafd531-90de-11e6-99eb-3fed8dc5eb25",
				courseSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				introductionOfCourse:"JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"sass.png",
				professorName:"문성훈",
				subjectName:"JAVA",
				subjectSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다."
			},
			{
				courseID : "adafd531-90de-11e6-99eb-3fed8dc5eb25",
				courseSummary:"JAVA 본 강의는 크게 2가지에 초점을 맞추고 있습니다. ↵ 첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.↵둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				introductionOfCourse:"JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"bootstrap.png",
				professorName:"문성훈",
				subjectName:"JAVA",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다."
			}
		];
		vm.approveSubjects =[
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"nodejs.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"python.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"java.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"c.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"c++.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:0,
				completedContents:5,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"java.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"css.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"sass.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"angular.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"javascript.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"nodejs.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			},
			{
				approveStatus:"approve",
				completed:1,
				completedContents:0,
				courseID:"adaeeac1-90de-11e6-99eb-3fed8dc5eb25",
				courseOfMemberId:"048671e0-90e1-11e6-99eb-3fed8dc5eb25",
				professorID:"adaa56e0-90de-11e6-99eb-3fed8dc5eb25",
				subjectImg:"python.png",
				professorName:"문성훈",
				recentCourse:1,
				subjectName:"jQuery",
				subjectSummary:"JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다.",
				totalContents:11,
			}
		];


		vm.goPossibleSubjectFunction = function(professorId, courseId, courseName){
			$location.path('/myClassRoom/introduceCourses/possibleSubject').search({professorID: professorId, courseID: courseId, subjectName:courseName});
		};

		vm.goDoingSubjectFunction = function(professorId, courseId,courseName){
			$location.path('/myClassRoom/introduceCourses/doingSubject').search({professorID: professorId, courseID: courseId, subjectName:courseName});
		};

		vm.goCompletedSubjectFunction = function(professorId, courseId, courseName){
			$location.path('/myClassRoom/introduceCourses/completedSubject').search({professorID: professorId, courseID: courseId, subjectName:courseName});
		}
	}

})();

