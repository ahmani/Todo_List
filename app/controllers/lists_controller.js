angular.module('todos').controller('ListsController',
	['$scope', '$http', 'List',
	function($scope,$http, List ){

		//Get lists
		$scope.getlist = function()
		{
			$http.get('http://todos.api.netlor.fr/lists',
			{
	    		headers: {
	    			'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
	    		}
			}
			)
			.then(function(response){
				$scope.lists = [];
				response.data.forEach(function(data){
					var newList = new List(data);
					$scope.lists.push(newList);
				})
			},
			function(error){
				console.log(error)
			});
		}
		 
		$scope.getlist()
		$scope.List = List;
		

		//Add new list
		$scope.addList = function()
		{
			var data = '{"label":"'+$scope.myangular+'"}';
			var config = {headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

			$http.post('http://todos.api.netlor.fr/lists', data, config)
			.then(function(response) {
				$scope.getlist()
			}, function(error) {
				console.log(error);
			})
		}

		//Update list
		$scope.UpdateList = function()
		{
			var data = '{"label":"'+$scope.updatefield+'"}';
			var config = {headers: {
    				'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

    		var id = $scope.List.selected_list.list_id;

    		$http.put('http://todos.api.netlor.fr/lists/'+id, data, config)
			.then(function(response) {
				$scope.getlist()
			}, function(error) {
				console.log(error);
			})
		}

		//Delete list
		$scope.deleteList = function()
		{
			var config = {headers: {
    			'Authorization': 'Token token=ca693cdf240c47be86fc145c7508e78e'
    		}}

    		var id = $scope.List.selected_list.list_id;

			$http.delete('http://todos.api.netlor.fr/lists/'+id, config)
			.then(function(response) {
				$scope.getlist()
			}, function(error) {
				console.log(error);
			})
		}

	}
	]);