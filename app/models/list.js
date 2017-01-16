angular.module('todos').service('List',['$http',
	function($http)
	{
		var List = function(data){
			this.label = data.label;
			this.list_id = data.id;
		}

		List.prototype.select = function(){
			List.selected_list = this;
		}
			
		return List;
	}
]);