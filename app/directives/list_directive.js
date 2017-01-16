angular.module('todos').directive('list',[
	function(){
		return {
			restrict : 'E',
			templateUrl : 'app/templates/list.html'
		};
	}
]);