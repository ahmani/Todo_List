angular.module('todos').directive('todo',[
	function(){
		return {
			restrict : 'E',
			templateUrl : 'app/templates/todo.html'
		};
	}
]);