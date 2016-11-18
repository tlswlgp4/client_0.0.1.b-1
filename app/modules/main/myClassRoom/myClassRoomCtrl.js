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
		.controller('MyClassRoomCtrl', myClassRoom);


	myClassRoom.$inject = ['homeService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function myClassRoom(homeService, $location ) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, codeEnjoy!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

		vm.datailsOfCourse = [
			{
				"heading" : "과정소개",
				"content" :"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"heading": "학습목표",
				"content": "C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				"heading" : "학습내용",
				"content" : "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."
			},
			{
				"heading" : "학습대상",
				"content" : "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."
			},
			{
				"heading" : "학습방법",
				"content" : "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."
			},{
				"heading" : "평가방법",
				"content" : "Toyota Motor Corporation is a Japanese automotive manufacturer which was founded by Kiichiro Toyoda in 1937 as a spinoff from his father's company Toyota Industries, which is currently headquartered in Toyota, Aichi Prefecture, Japan."
			}
		];

		// vm.collapseAll = function(data) {
		// 	for(var i in $scope.accordianData) {
		// 		if($scope.accordianData[i] != data) {
		// 			$scope.accordianData[i].expanded = false;
		// 		}
		// 	}
		// 	data.expanded = !data.expanded;
		// };


		vm.studentInfo  ={
			numberOfCompletedContentsInCourse: 7,
			numberOfTotalContentsInCourse:11,
			status: [
				{
					UnitNumber:1,
					isCompleted: true
				},
				{
					UnitNumber: 2,
					isCompleted: false
				},
				{
					UnitNumber: 3,
					isCompleted: false
				}
			]
		};

		vm.courseInfo  = [
			{
				NumberOfTotalQuestionsForAssignment:4,
				NumberOfTotalQuestionsForExam:4,
				ProfessorId:"e7aa9cd0-9a78-11e6-b468-f31de1ad378f",
				TableOfContentsInCourse:"1. jQuery Selector 2. jQuery Method",
				approveStatus_professor:"approve",
				bookName:"미정",
				courseName:"C++",
				courseSummary:"C++ 본 강의는 크게 2가지에 초점을 맞추고 있습니다.   첫째로, JavaScript의 가장 대중적인 library인 jQuery를 통해서 웹 페이지의 동적처리가 얼마나 손쉬워지는가에 대해서 학습합니다. 둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다. 둘째로, jQuery를 이용한 AJAX를 통해 서버와의 통신처리가 얼마나 직관적으로 처리될 수 있는지에 대해서 학습합니다.",
				deadlineForConsignmentEducationDoc:"2016-03-04",
				durationOfTheCourse:"2016-03-01~2016-05-07 (일)",
				professorName :"문성훈",
				lectureTime:"100시간",
				evaluationMethod:"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				formOfSupport:"C++ 위탁교육",
				goalOfLearning:"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				introductionOfCourse:"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry.C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				mannerOfLearning:"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				numberOfStudent:500,
				numberOfTotalContentsInCourse:11,
				numberOfUnit:2,

				price:"미정",
				recruitmentPeriod:"2016-01-01~2016-01-04",
				refund:"34900원(위탁교육)",
				targetOfLearning:"C++ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				unemploymentInsurance:"적용(환급)",
				myContentsInCourse: [
					{
						CourseId:"e7af7f81-9a78-11e6-b468-f31de1ad378f",
						EndAssignmentDate:"2016-10-31",
						EndExamDate:"2016-10-31",
						NumberOfQuestionsForAssignment:2,
						NumberOfQuestionsForExam:2,
						RequireAssignment:true,
						RequireExam:true,
						StartAssignmentDate:"2016-09-11",
						StartExamDate:"2016-09-11",
						TableOfContentsInUnit:"1. 전체 선택자(universal selector) 2. 태그 선택자(tag selector) 3. 아이디 선택자(id selector) 4. 클래스 선택자(class selector) 5. 구조 선택자 6. 속성 선택자 7. 상태 선택자",
						UnitName:"C++ jQuery Selector",
						UnitNumber:1,
						UnitIsCompeletd:true,
						UnitSummary:"C++ jQuery의 기본적인 6개의 선택자(selector)부터 시작하여 다양한 형태의 선택자에 대해서 살펴봅니다. C++ jQuery의 기본적인 6개의 선택자(selector)부터 시작하여 다양한 형태의 선택자에 대해서 살펴봅니다.  Selector는 웹 페이지에서 내가 제어하고 싶은 element를 선택할 수 있도록 만들어 주는 특별한 형태의 문자열을 지칭합니다.  이 Selector를 이용하여 제어하고자 하는 HTML Element를 jQuery 객체로 변환시킨 다음 제공되는 method를 이용하여 제어하는 형식을 따르게 됩니다.",
						createdAt:"2016-10-25T06:04:35.000Z",
						id:"e7af7f82-9a78-11e6-b468-f31de1ad378f"
					},
					{
						CourseId:"e7af7f81-9a78-11e6-b468-f31de1ad378f",
						EndAssignmentDate:"2016-10-31",
						EndExamDate:"2016-10-31",

						NumberOfQuestionsForAssignment:2,
						NumberOfQuestionsForExam:2,
						RequireAssignment:false,
						RequireExam:false,
						StartAssignmentDate:"2016-09-11",
						StartExamDate:"2016-09-11",
						TableOfContentsInUnit:"1. each() method 2. addClass() method 3. attr() method 4. text()와 html() method",
						UnitName:"C++ jQuery Method",
						UnitNumber:2,
						UnitIsCompeletd:true,
						UnitSummary:"C++ jQuery의 다양한 method에 대한 소개입니다. 선택자(selector)를 이용하여 선택한 element를 제공되는 jQuery method를 이용하여 어떻게 제어할 수 있는지에 대해 알아봅시다.선택자(selector)를 이용하여 선택한 element를 제공되는 jQuery method를 이용하여 어떻게 제어할 수 있는지에 대해 알아봅시다.",
						createdAt:"2016-10-25T06:04:35.000Z",
						id:"e7af7fb8-9a78-11e6-b468-f31de1ad378f"
					},
					{
						CourseId:"e7af7f81-9a78-11e6-b468-f31de1ad378f",
						EndAssignmentDate:"2016-10-31",
						EndExamDate:"2016-10-31",

						NumberOfQuestionsForAssignment:2,
						NumberOfQuestionsForExam:2,
						RequireAssignment:false,
						RequireExam:false,
						StartAssignmentDate:"2016-09-11",
						StartExamDate:"2016-09-11",
						TableOfContentsInUnit:"1. each() method 2. addClass() method 3. attr() method 4. text()와 html() method",
						UnitName:"C++ jQuery Method",
						UnitNumber:3,
						UnitIsCompeletd:false,
						UnitSummary:"C++ jQuery의 다양한 method에 대한 소개입니다. 선택자(selector)를 이용하여 선택한 element를 제공되는 jQuery method를 이용하여 어떻게 제어할 수 있는지에 대해 알아봅시다.C++ jQuery의 다양한 method에 대한 소개입니다. 선택자(selector)를 이용하여 선택한 element를 제공되는 jQuery method를 이용하여 어떻게 제어할 수 있는지에 대해 알아봅시다.C++ jQuery의 다양한 method에 대한 소개입니다. 선택자(selector)를 이용하여 선택한 element를 제공되는 jQuery method를 이용하여 어떻게 제어할 수 있는지에 대해 알아봅시다.",
						createdAt:"2016-10-25T06:04:35.000Z",
						id:"e7af7fb8-9a78-11e6-b468-f31de1ad378f"
					}
				]
			}
		];
		vm.professorName = "문성훈";
		vm.professorImg ='images/professorImages/문성훈.jpg';
		vm.subjectName = vm.courseInfo.courseName;
		vm.recentImage = 'app/assets/images/coursesImage/java.png';
		// vm.recentImage = 'app/assets/images/coursesImage/'+vm.subjectName+'.png'

		vm.otherProfessors = [
			{
				courseId:"e81852c2-9a78-11e6-b468-f31de1ad378f",
				courseName:"C++",
				name:"최재호",
				numberOfStudent:50,
				professorId:"e81397d0-9a78-11e6-b468-f31de1ad378f"
			},
			{
				courseId:"e8302082-9a78-11e6-b468-f31de1ad378f",
				courseName:"C++",
				name:"정진용",
				numberOfStudent:50,
				professorId:"e82dd690-9a78-11e6-b468-f31de1ad378f"
			}
		];

		vm.otherProfessorInfo = function(CourseId, ProfessorId){
			$location.path('/myClassRoom/introduceProfessors').search({professorID: ProfessorId, courseID: CourseId});
		};
	}

})();


