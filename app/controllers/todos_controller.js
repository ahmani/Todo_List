angular.module('todos').controller('TodosController',
	['$scope', '$http', 'Todo',
	function($scope,$http, Todo ){

			$scope.list = function(list_id)
			{	
				console.log(list_id)
				$http.get('http://todos.api.netlor.fr/lists/'+this.list_id+'/todos',
				{
		    		headers: {
		    			'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
		    		}
				}
				)
				.then(function(response){
					$scope.list_todos = [];
					console.log(response.data)
						response.data.forEach(function(data){

							var newList = new Todo(data);
							$scope.list_todos.push(newList);
						})
				},
				function(error){
					console.log(error)
				});

			}
	}
]);