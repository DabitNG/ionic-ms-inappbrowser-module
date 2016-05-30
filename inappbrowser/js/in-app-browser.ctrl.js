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
	 * @return {function} sysBrowser(), blankBrowser(), selfBroser()
	 */
	function openBrowser(){
		return {
			sysBrowser: function(url){
				window.open(url, '_system', 'location=yes');
			},
			blankBrowser: function(url){
				window.open(url, '_blank', 'location=yes');
			},
			selfBrowser: function(url){
				window.open(url, '_self', 'location=yes');
			}
		}
	} 

})();

