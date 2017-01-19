angular.module('todos').controller('TodosController',
	['$scope', '$http', 'Todo', 'List',
	function($scope,$http, Todo,List ){

		$scope.List = List;
		$scope.Todo = Todo;


		list_todos = function()
		{
			$http.get('http://todos.api.netlor.fr/lists/'+ $scope.List.selected_list.list_id+'/todos',
					{
			    		headers: {
			    			'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
			    		}
					}
					)
					.then(function(response){
						$scope.list_todos = [];
							response.data.forEach(function(data){
								var newtodo = new Todo(data);
								$scope.list_todos.push(newtodo);
							})
					},
					function(error){
						console.log(error)
					});
		}


		$scope.$watch(function(){
			return $scope.List.selected_list;
		}, function(new_value,old_value){
			if(new_value)
			{
				list_todos();
			}
			
		});		
		
		

		 $scope.addTodo = function(){
			var list_id =  $scope.List.selected_list.list_id;

			var data = '{"text":"'+$scope.matache+'"}';
			var config = {headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

			$http.post('http://todos.api.netlor.fr/lists/'+list_id+'/todos', data, config)
			.then(function(response){
				list_todos()
			}, function(error) {
				console.log(error);
			})
		}
		

		$scope.updateTodo = function(){
			var list_id =  $scope.List.selected_list.list_id;
			var todo_id = $scope.Todo.selected_todo.id;

			var data = '{"text":"'+$scope.matacheup+'"}';
			var config = {
				headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

			$http.put('http://todos.api.netlor.fr/lists/'+list_id+'/todos/'+todo_id+'', data, config)
			.then(function(response) {
				list_todos()
			}, function(error) {
				console.log(error);
			})
		}

		$scope.deleteTodo = function()
		{
			var config = {headers: {
    			'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

    		var list_id = $scope.List.selected_list.list_id;
    		var todo_id = $scope.Todo.selected_todo.id;

			$http.delete('http://todos.api.netlor.fr/lists/'+list_id+'/todos/'+todo_id+'', config)
			.then(function(response) {
				list_todos()
			}, function(error) {
				console.log(error);
			})
		}

		$scope.doneTodo = function(){
			var list_id =  $scope.List.selected_list.list_id;
			var todo_id = $scope.Todo.selected_todo.id;

			var data = '{"text":"'+$scope.matacheup+'"}';
			var config = {
				headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

			$http.put('http://todos.api.netlor.fr/lists/'+list_id+'/todos/'+todo_id+'/done', data, config)
			.then(function(response) {
				list_todos()
			}, function(error) {
				console.log(error);
			})
		}

		$scope.undoneTodo = function(){
			var list_id =  $scope.List.selected_list.list_id;
			var todo_id = $scope.Todo.selected_todo.id;

			var data = '{"text":"'+$scope.matacheup+'"}';
			var config = {
				headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

			$http.put('http://todos.api.netlor.fr/lists/'+list_id+'/todos/'+todo_id+'/undone', data, config)
			.then(function(response) {
				list_todos()
			}, function(error) {
				console.log(error);
			})
		}



	}
]);