/**
*  InAppBrowser controllers. 
*  @author DabitNG 
*/

(function() {

	'use strict';

	/**
	* InAppBrowser Module Controller
	*/
	angular.module('in-app-browser.controllers',[])

	/**
	* InAppBrowser Controller
	*/
	.controller('InAppBrowserCtrl', openBrowser);

	/**
	* Given url opens in browser
	* @param  $scope
	* @return 
	*/
	function openBrowser($scope){
		$scope.sysBrowser = function(url){
			window.open(url, '_system', 'location=yes');
		};
		$scope.blankBrowser = function(url){
			window.open(url, '_blank', 'location=yes');
		};
		$scope.selfBrowser = function(url){
			window.open(url, '_self', 'location=yes');
		};
	} 

})();

